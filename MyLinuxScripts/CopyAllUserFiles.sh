user_dir="$HOME";
currentDir=$PWD;

echo $PWD;

echo $user_dir;

cd $user_dir;

cp -r . "$currentDir"/../LinuxBackup/UserConfig/Home;

