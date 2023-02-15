# https://phoenixnap.com/kb/how-to-install-postgresql-on-ubuntu

sudo apt-get install wget ca-certificates

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

sudo apt-get update

# ESTOU AQUI
sudo apt-get install postgresql postgresql-contrib

## Test connection:
# To establish a connection with the newly set-up database, log into the postgres account with:
# sudo su - postgres

# Now open a postgress prompt using the command:
# psql