# company-profile-expo

### - install dependencies with `yarn`
### - run `yarn run web` to open the app in browser as a web SPA.
### - run `yarn run ios` to install the app on your iphone.
### - run `yarn run android` to install the app on your android device.

#### Important:
 - The app can be run as a standalone react-native app as well as web application, thanks to react-native-web.
 - Primitives like View, Text, Image are not impoterted directly to make possible adding custom behavior for all element in a single place
 - companies.json uses index structure to make possible quick access by id. The array would be slover int his cases as Array.find is an expencive operation.
 In case if the order of companies in tab bar is important, it should be stored as an array of ids separatelly.
 
 If you are using android device, you can run the app without checking out the project.
 You need to install Expo client and scran qr, instructions below:
 https://expo.io/@pshepitchak/comnpany-profile-expo
