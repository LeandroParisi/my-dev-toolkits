vs_code_config_dir="$HOME/.config/Code/User";
currentDir=$PWD;

echo $PWD;

echo $vs_code_config_dir;

cd $vs_code_config_dir;

cp ./keybindings.json "$currentDir"/../LinuxBackup/VsCodeConfigs;

cp ./settings.json "$currentDir"/../LinuxBackup/VsCodeConfigs;
