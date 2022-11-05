#####################################
## Leandro Parisi Scripts
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
alias clearTrash='cd /home/leandro-parisi/.local/share/Trash/info && rm -rf *';
alias gitCustomActions='magicCommit <commit message>, magicCommitU <commit message> <repo name>, magicoCommitN <commit message>';

# Docker aliases
alias dup='docker-compose up -d';
alias dsa='docker container stop $(docker container ls -aq)';
alias dra='docker container rm $(docker ps -a -q)';
alias dls='docker container ls';
alias dka='docker kill $(docker ps -q)';
alias dpa='docker container prune';

alias gitPushAll='ls | xargs -I{} sh -c "(echo 'Executing script on {} \n' && cd {} && git add . && git commit -n -m 'updating' && git push && echo '\n-------\n')"'

alias dockerAliases='printf "du -> docker up\ndsa -> docker stop all\ndka -> docker kill all\ndls -> docker container ls\ndra -> docker remove all\ndpa -> prune all containers"';
