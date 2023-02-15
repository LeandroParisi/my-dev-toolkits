## <Leandro Parisi Scripts
# My funcs
function magicCommit() {
    git add .
    git commit -m "$1"
    git push
}

function magicCommitU() {
    git add .
    git commit -a -m "$1"
    git push -u origin "$2"
}

function magicCommitN() {
    git add .
    git commit -n -m "$1"
    git push
}

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

#####################################
# Git aliases

alias gitCustomActions='magicCommit <commit message>, magicCommitU <commit message> <repo name>, magicoCommitN <commit message>';
alias gitPushAll='ls | xargs -I{} sh -c "(echo 'Executing script on {} \n' && cd {} && git add . && git commit -n -m 'updating' && git push && echo '\n-------\n')"'

#####################################
# Docker aliases
alias dup='docker-compose up -d';
alias dsa='docker container stop $(docker container ls -aq)';
alias dra='docker container rm $(docker ps -a -q)';
alias dls='docker container ls';
alias dka='dsa && dra';
alias dpa='docker container prune';

alias dockerAliases='printf "du -> docker up\ndsa -> docker stop all\ndka -> docker kill all\ndls -> docker container ls\ndra -> docker remove all\ndpa -> prune all containers"';

#####################################
# General aliases
alias clearTrash='cd /home/leandro-parisi/.local/share/Trash/info && rm -rf *';
alias myScripts='cat ~/.zshrc'
#####################################

## Leandro Parisi Scripts>
