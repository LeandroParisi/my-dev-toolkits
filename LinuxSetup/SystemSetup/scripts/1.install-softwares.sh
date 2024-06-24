# ______________ FUNCTIONS ______________
function notify_instalation_configure() {
    echo "$1 installed, open it to configure"
}

function notify_instalation() {
    echo "$1 installed"
}
# ______________ FUNCTIONS ______________


cd ../dpkg_packages

sudo apt update && sudo apt upgrade

## General packages
sudo apt install curl

## Chrome
# wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# sudo dpkg -i google-chrome-stable_current_amd64.deb
# notify_instalation_configure "Chrome"

## VLC
sudo apt install vlc
notify_instalation "VLC"

## Discord
## https://linuxhint.com/install-discord-ubuntu22-04/
sudo snap install discord
notify_instalation_configure "Discord"

## Slack
## https://linuxize.com/post/how-to-install-slack-on-ubuntu-20-04/
sudo snap install slack --classic
notify_instalation_configure "Slack"

## Transmission
## https://linuxize.com/post/how-to-install-slack-on-ubuntu-20-04/
sudo snap install transmission
notify_instalation_configure "Transmission"

## DejaDup
sudo apt install deja-dup
notify_instalation_configure "DejaDup"

## QBitTorrent
# sudo add-apt-repository ppa:qbittorrent-team/qbittorrent-stable
# sudo apt install qbittorrent
# notify_instalation "QBitTorrent"

## OBS
sudo snap install obs-studio
sudo snap connect obs-studio:camera
sudo snap connect obs-studio:removable-media
notify_instalation_configure "ObsStudio"

## ZSH && Git
sudo apt-get install zsh
# sudo apt-get install git

## NVM && NPM && Yarn
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
sudo nvm install 16
sudo apt install npm
sudo npm install --global yarn

sudo curl -fsSL https://get.pnpm.io/install.sh | sh -

sudo apt update && sudo apt upgrade

cd ../scripts


