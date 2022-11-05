vs_code_dir="$HOME/.config/Code";
currentDir=$PWD;

echo $PWD;

echo $vs_code_dir;

cd $vs_code_dir;

cp -r . "$currentDir"/../LinuxBackup/VsCodeConfigs/Code;

# cp ./settings.json "$currentDir"/../VsCodeConfigs;
