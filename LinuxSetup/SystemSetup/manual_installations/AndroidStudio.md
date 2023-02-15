https://vitux.com/how-to-install-android-studio-on-ubuntu/
 Using Android Emulator:
   1. Linux:
      1. Install Java SDK:
      ```sh
      sudo apt install openjdk-11-jdk
      ```
      2. Install Android SDK: 
      ```sh
      sudo apt update && sudo apt install android-sdk
      ```
      1. Download and setup Android Studio:
         1. Download the [Android Studio](https://developer.android.com/studio#Other)
         2. Extract downloaded .zip file.
         3. The extracted folder name will read somewhat like android-studio
         4. To keep navigation easy, move this folder to Home directory.
         5. After moving, copy the moved folder by right clicking it. This action will place folder's location to clipboard.
         6. Use Ctrl Alt T to open a terminal
         7. Go to this folder's directory using cd /home/(USER NAME)/android-studio/bin/
         8. Type this command to make studio.sh executable:
        ```sh
        chmod +x studio.sh
        ```
         1. Type ./studio.sh
         2.  Follow installation instructions

OBS.: 
1. If you have any problems refer to [this link](https://stackoverflow.com/questions/34556884/how-to-install-android-sdk-on-ubuntu)
2. You may need to setup 1 or 2 env variables (ANDROID_SDK_ROOT and ANDROID_HOME)on your bash, check [this link](https://stackoverflow.com/questions/48510124/panic-cannot-find-avd-system-path-please-define-android-sdk-root-in-windows-1) for more info

____