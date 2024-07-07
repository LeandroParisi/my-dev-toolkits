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

Option 2:
To run .apk files (Android application packages) on Linux, you can use an Android emulator or simulator. One of the most popular options is to use **Android Studio**, which includes the official Android Emulator. Here's how you can install and set it up:

### Step-by-Step Guide to Install Android Studio on Linux

1. **Download Android Studio**:
   - Visit the [Android Studio download page](https://developer.android.com/studio).
   - Choose the Linux version that matches your system architecture (usually 64-bit).

2. **Install Android Studio**:
   - Once downloaded, extract the downloaded archive to a location where you want Android Studio to be installed (for example, `/opt`).
     ```bash
     sudo tar -xvzf android-studio-ide-*.tar.gz -C /opt/
     ```
   - Navigate to the Android Studio directory:
     ```bash
     cd /opt/android-studio/bin/
     ```
   - Run Android Studio:
     ```bash
     ./studio.sh
     ```
     This will start the Android Studio Setup Wizard.

3. **Setup Wizard**:
   - Follow the Setup Wizard instructions to install Android Studio on your system.
   - Install the Android SDK components and any necessary dependencies.

4. **Configure Android Emulator**:
   - Once Android Studio is installed and launched, go to `Tools` -> `AVD Manager` (AVD stands for Android Virtual Device).
   - Click on `Create Virtual Device` to create a new Android emulator.
   - Choose a device definition (e.g., Pixel device) and click `Next`.
   - Select a system image (preferably the latest stable version) and click `Next`.
   - Configure AVD options (like RAM size, VM heap, etc.) and click `Finish`.

5. **Run the Android Emulator**:
   - Once the AVD (Android Virtual Device) is created, click the green triangle (`Play` button) next to it to launch the emulator.
   - Wait for the emulator to start up. This may take a few minutes the first time.

6. **Install APK in Emulator**:
   - Once the emulator is running, you can drag and drop your `.apk` file onto the emulator window.
   - Alternatively, you can use ADB (Android Debug Bridge) from the command line:
     ```bash
     adb install /path/to/your/app.apk
     ```
     Replace `/path/to/your/app.apk` with the actual path to your `.apk` file.

### Notes:
- **System Requirements**: Ensure your Linux system meets the [system requirements](https://developer.android.com/studio#Requirements) for Android Studio and the Android Emulator.
- **Performance**: Emulators can be resource-intensive. If you encounter performance issues, consider using a physical Android device for testing instead.

By following these steps, you should be able to install Android Studio on Linux and use its built-in Android Emulator to run `.apk` files effectively for testing and development purposes.