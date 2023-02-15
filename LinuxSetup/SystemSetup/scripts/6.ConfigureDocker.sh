sudo groupadd -f docker

sudo usermod -aG docker $USER

newgrp docker

groups