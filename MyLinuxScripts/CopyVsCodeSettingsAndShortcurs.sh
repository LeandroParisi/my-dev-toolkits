vs_code_config_dir="$HOME/.config/Code/User";
currentDir=$PWD;

cp "$vs_code_config_dir"/keybindings.json "$currentDir"/vs_code

cp "$vs_code_config_dir"/settings.json "$currentDir"/vs_code;