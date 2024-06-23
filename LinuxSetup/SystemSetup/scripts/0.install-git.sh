sudo apt-get update
sudo apt-get install git

git config --global user.name "LeandroParisi"
git config --global user.email "lepcbelisario@gmail.com"

# Generate SSH key
ssh-keygen -t ed25519 -C "lepcbelisario@gmail.com"

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

cat ~/.ssh/id_ed25519.pub


