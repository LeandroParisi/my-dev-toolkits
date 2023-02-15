which zsh

chsh -s $(which zsh)

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

cat exec /bin/zsh >> ~/.bashrc

echo "ZSH properlly configured, please logout and in to see it as default terminal"