# eCommerce - React Native App

Encryption for Mobile & Wireless App performing communication at different level (mobile, network, cloud, and everything in-between).

## Team

- Jose
- Mayur


## Objective

' Set security controls and encryption at various level

* React Native (App runs on Android and iOS platform)
  * Cross Platform
  * Maximum Code Reuse
  * Keep Configuration out of the Code
* Deployment (CI/CD) via Github and npm/yaml
* Installed Xcode and Android Studio with dependencies, SDK and emulator


## Debug

* To initiate new app `react-native init`
* To initiate Git repo: `git init .`
* To add and commit: `git add . && git commit -m 'skeleton - react native`
* When the error appears, run "npm install" & "npm start"
* To fix xcode agreement issue `sudo xcodebuild -license`
* Upgrade react native `react-native upgrade` or `react-native-git-upgrade`
* One of the dependency: `npm install --save react-native-tabs`
* sudo lsof -i :8081
* Run `react-native run-ios` or `react-native run-ios --simulator="iPhone 5"`
* Run `react-native run-android`
* diff index.ios.js index.android.js
* Fix pull issues amongst contributors: `git branch --set-upstream-to=origin/master master && git pull`
* React Native SDK Error on Android (macOS / OSX)
```
	# React Native Path Fix for Android in macOS
	export ANDROID_HOME=/Users/mayur/Library/Android/sdk/
	export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

## References

* Getting Started: https://facebook.github.io/react-native/docs/getting-started.html
* Downloading Xcode: https://developer.apple.com/download/
* Downloading Android Studio: https://developer.android.com/studio/index.html
* Tabs: https://differential.com/insights/sharing-code-between-android-and-ios-in-react-native/
