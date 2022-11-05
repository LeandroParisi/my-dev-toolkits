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

# General packages
sudo apt install curl

# Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
notify_instalation_configure "Chrome"

sudo apt install vlc
notify_instalation "VLC"

# https://linuxhint.com/install-discord-ubuntu22-04/
sudo snap install discord
notify_instalation_configure "Discord"

# https://linuxize.com/post/how-to-install-slack-on-ubuntu-20-04/
sudo snap install slack --classic
notify_instalation_configure "Slack"

sudo apt install deja-dup
notify_instalation_configure "DejaDup"

sudo add-apt-repository ppa:qbittorrent-team/qbittorrent-stable
sudo apt install qbittorrent
notify_instalation "QBitTorrent"

sudo snap install obs-studio
sudo snap connect obs-studio:camera
sudo snap connect obs-studio:removable-media
notify_instalation_configure "ObsStudio"

sudo apt-get install zsh

sudo apt-get install git

# ESTOU AQUI
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm install 16
sudo apt install npm
npm install --global yarn

sudo apt update && sudo apt upgrade

cd ../scripts


