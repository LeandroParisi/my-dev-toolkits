bashFilePath=$HOME/.zshrc
outputPathCustomScripts=./my_scripts/my_custom_scripts.sh
outputPathzsch=./my_scripts/zsch_backup.sh


sed -n '/<Leandro Parisi Scripts/,/Leandro Parisi Scripts>/p' $bashFilePath > $outputPathCustomScripts

cp $bashFilePath $outputPathzsch


vs_code_config_dir="$HOME/.config/Code/User";
currentDir=$PWD;

cp "$vs_code_config_dir"/keybindings.json "$currentDir"/vs_code

cp "$vs_code_config_dir"/settings.json "$currentDir"/vs_code;
