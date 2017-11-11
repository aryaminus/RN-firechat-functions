# RnFireChat-functions

**RnFireChat-functions** is the 5th session build for showing the implementation of Firebase for building a Chat app; both Chat Room and p2p along with serverless function for push notification which works in transition to this repository:

<a href="https://github.com/aryaminus/RN-firechat" target="_blank">RN-firechat</a>

[![RnFireChat demo](https://i.imgur.com/Lae3m7R.gif)](https://youtu.be/XNQ1jgqpX3c)

## Installation

To use Functions, you need to install Firebase command line tools using npm so do install <a href="https://nodejs.org/en/download/" target="_blank">node.js</a>
Then, install Firebase CLI
```
$ npm install -g firebase-tools
```

Now, Clone the source locally:
```
$ git clone https://github.com/aryaminus/RN-firechat-functions
$ cd RN-firechat-functions
```

Install node modules:
```
$ cd functions
$ npm install
```

Login and deploy:
```
$ firebase login
$ firebase deploy --only functions:sendNotification
```

**Else**
To initialize your project:

    Run ```firebase login``` to log in via the browser and authenticate the firebase tool.
    Go to your Firebase project directory.
    Run ```firebase init functions```. The tool gives you an option to install dependencies with npm. It is safe to decline if you want to manage dependencies in another way.

After these commands complete successfully, your project structure looks like this:
```
myproject
 +- .firebaserc    # Hidden file that helps you quickly switch between
 |                 # projects with `firebase use`
 |
 +- firebase.json  # Describes properties for your project
 |
 +- functions/     # Directory containing all your functions code
      |
      +- package.json  # npm package file describing your Cloud Functions code
      |
      +- index.js      # main source file for your Cloud Functions code
      |
      +- node_modules/ # directory where your dependencies (declared in
                       # package.json) are installed
```

Now, Clone the source locally:
```
$ git clone https://github.com/aryaminus/RN-firechat-functions
$ cd RN-firechat-functions
```
Then copy the files inside RN-firechat-functions/functions/index.js to myproject/functions/index.js

To deploy and execute:
```
$ firebase deploy --only functions:sendNotification
```

## Additional Links:
1. <a href="https://firebase.google.com/docs/functions/" target="_blank">Firebase Cloud Functions</a>
2. <a href="https://firebase.google.com/docs/functions/get-started" target="_blank">Getting started with firebase functions</a>
3. <a href="https://firebase.google.com/docs/cli/" target="_blank">Cli Docs</a>

## Contributing

1. Fork it (<https://github.com/aryaminus/RN-firechat-functions/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


