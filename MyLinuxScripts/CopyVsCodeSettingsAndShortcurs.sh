vs_code_config_dir="$HOME/.config/Code/User";
currentDir=$PWD;

echo $vs_code_config_dir;

cd $vs_code_config_dir;

cp ./keybindings.json "$OLDPWD"/../VsCodeConfigs;

cp ./settings.json "$OLDPWD"/../VsCodeConfigs;
