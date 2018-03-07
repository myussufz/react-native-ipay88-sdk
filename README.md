
# react-native-ipay88-sdk

## Getting started

`$ npm install react-native-ipay88-sdk --save`

### Mostly automatic installation

`$ react-native link react-native-ipay88-sdk`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-ipay88-sdk` and add `RNIpay88Sdk.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNIpay88Sdk.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNIpay88SdkPackage;` to the imports at the top of the file
  - Add `new RNIpay88SdkPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-ipay88-sdk'
  	project(':react-native-ipay88-sdk').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-ipay88-sdk/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-ipay88-sdk')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNIpay88Sdk.sln` in `node_modules/react-native-ipay88-sdk/windows/RNIpay88Sdk.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Ipay88.Sdk.RNIpay88Sdk;` to the usings at the top of the file
  - Add `new RNIpay88SdkPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNIpay88Sdk from 'react-native-ipay88-sdk';

// TODO: What to do with the module?
RNIpay88Sdk;
```
  