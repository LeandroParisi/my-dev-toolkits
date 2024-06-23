# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
## <Leandro Parisi Scripts
# My funcs
# Magic Commit Aliases
function mc() {
    git add .
    git commit -m "$1"
    git push
}

function mcu() {
    git add .
    git commit -a -m "$1"
    git push -u origin "$2"
}

function mcn() {
    git add .
    git commit -n -m "$1"
    git push
}

function cloneBareForWorktrees() {
    set -e

    # CREDIT: https://morgan.cugerone.com/blog/workarounds-to-git-worktree-using-bare-repository-and-cannot-fetch-remote-branches/

    # Examples of call:
    # git-clone-bare-for-worktrees git@github.com:name/repo.git
    # => Clones to a /repo directory
    #
    # git-clone-bare-for-worktrees git@github.com:name/repo.git my-repo
    # => Clones to a /my-repo directory

    url=$1
    basename=${url##*/}
    name=${2:-${basename%.*}}

    mkdir $name
    cd "$name"

    # Moves all the administrative git files (a.k.a $GIT_DIR) under .bare directory.
    #
    # Plan is to create worktrees as siblings of this directory.
    # Example targeted structure:
    # .bare
    # main
    # new-awesome-feature
    # hotfix-bug-12
    # ...
    git clone --bare "$url" .bare
    echo "gitdir: ./.bare" > .git

    # Explicitly sets the remote origin fetch so we can fetch remote branches
    git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"

    # Gets all branches from origin
    git fetch origin
}

function cleanUbuntu {
    ## Show free space
    sudo df -Th | grep -v fs
    # Will need English output for processing
    LANG=en_GB.UTF-8

    ## Clean apt cache
    sudo apt-get update
    sudo apt-get -f install
    sudo apt-get -y autoremove
    sudo apt-get clean

    ## Remove old versions of snap packages
    snap list --all | while read snapname ver rev trk pub notes; do
        if [[ $notes = *disabled* ]]; then
            sudo snap remove "$snapname" --revision="$rev"
        fi
    done
    ## Set snap versions retain settings
    if [[ $(snap get system refresh.retain) -ne 2 ]]; then sudo snap set system refresh.retain=2; fi
    sudo rm -f /var/lib/snapd/cache/*

    ## Remove old versions of Linux Kernel
    # This one-liner is deprecated since 18.04
    # dpkg -l 'linux-*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d' | xargs apt-get -y purge
    # New 2 lines to remove old kernels
    sudo dpkg --list | grep 'linux-image' | awk '{ print $2 }' | sort -V | sed -n '/'"$(uname -r | sed "s/\([0-9.-]*\)-\([^0-9]\+\)/\1/")"'/q;p' | xargs apt-get -y purge
    sudo dpkg --list | grep 'linux-headers' | awk '{ print $2 }' | sort -V | sed -n '/'"$(uname -r | sed "s/\([0-9.-]*\)-\([^0-9]\+\)/\1/")"'/q;p' | xargs apt-get -y purge

    ## Rotate and delete old logs
    /etc/cron.daily/logrotate
    sudo find /var/log -type f -iname *.gz -delete
    sudo journalctl --rotate
    sudo journalctl --vacuum-time=1s

    ## Show free space
    sudo df -Th | grep -v fs

    ## Clean trash
    (cd /home/leandro-parisi/.local/share/Trash/info && sudo rm -rf *)

    ## Show free space
    sudo df -Th | grep -v fs
}

function removeAllHashDockerVolumes {
    # Get a list of all Docker volumes
    volumes=$(docker volume ls -q)

    # Loop through each volume
    for volume in $volumes; do
        # Check if the volume name is a hash (32 characters long)
        if [[ ${#volume} -eq 32 && $volume =~ ^[a-fA-F0-9]+$ ]]; then
            echo "Removing volume: $volume"
            docker volume rm $volume
        fi
    done
}

#####################################
# Overall aliases
alias soundControl='pavucontrol'

#####################################
# Git aliases

alias gitCustomActions='magicCommit <commit message>, magicCommitU <commit message> <repo name>, magicoCommitN <commit message>';
alias gitPushAll='ls | xargs -I{} sh -c "(echo 'Executing script on {} \n' && cd {} && git add . && git commit -n -m 'updating' && git push && echo '\n-------\n')"'

#####################################
# Docker aliases
alias drv='docker volume rm $(docker volume ls -q)';
alias dup='docker-compose up -d';
alias dupwl='docker-compose up';
alias dsa='docker container stop $(docker container ls -aq)';
alias dra='docker container rm $(docker ps -a -q)';
alias dls='docker container ls';
alias dka='dsa && dra';
alias dpa='docker container prune';

alias dockerAliases='printf "du -> docker up\ndsa -> docker stop all\ndka -> docker kill all\ndls -> docker container ls\ndra -> docker remove all\ndpa -> prune all containers"';

#####################################
# Tips
## get folder size
# du -hs /path/to/directory
# -h is to get the numbers "human readable", e.g. get 140M instead of 143260 (size in KBytes)
# -s is for summary (otherwise you'll get not only the size of the folder but also for everything in the folder separately)
#####################################

#####################################
# General aliases
alias clearTrash='cd /home/leandro-parisi/.local/share/Trash/info && rm -rf *';
alias myScripts='cat ~/.zshrc'
alias deleteAllMergedBranches='git branch -r --merged | egrep -v "(^\*|master|main|develop)" | sed 's/origin\///' | xargs -n 1 git push origin --delete'
#####################################


alias act='/bin/act'

## Leandro Parisi Scripts>
export DOTNET_ROOT=$HOME/.dotnet
export PATH=$PATH:$HOME/.dotnet:$HOME/.dotnet/tools

alias startFoundry='~/Games/FoundryVTT/foundryvtt'

export FLYCTL_INSTALL="/home/leandro-system-21/.fly"
export PATH="$FLYCTL_INSTALL/bin:$PATH"

export NVM_DIR="/home/leandro-system-21/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

export PATH=$PATH:/usr/local/go/bin:$HOME/GoProjects/bin

export GOPATH=$HOME/GoProjects

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
