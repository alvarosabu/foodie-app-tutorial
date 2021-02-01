![repo-banner](https://res.cloudinary.com/alvarosaburido/image/upload/v1612193118/as-portfolio/Repo_Banner_kexozw.png)

# Foodie App Tutorial

> This is the repo holding the code used in the **Series: Building a mobile App with Ionic Vue + TailwindCSS** for [youtube] and [dev.to]

## Installation

```bash
npm install
```

or

```bash
yarn
```

## Development

To run the project on the browser just use the command

```bash
ionic serve
```

## Build

Complete a fresh build of the Ionic project by running

```bash
ionic build
```

## Capacitor setup

```bash
ionic cap add ios
ionic cap add android
```

## Build android apk

Capacitor Android apps are configured and managed through Android Studio. Before running this app on an Android device, there's a couple of steps to complete.

First, run the Capacitor open command, which opens the native Android project in Android Studio:

```bash
ionic cap open android
```

## Build iOS apk

To build an iOS app, you’ll need a Mac computer.

Capacitor iOS apps are configured and managed through Xcode (Apple’s iOS/Mac IDE), with dependencies managed by CocoaPods. Before running this app on an iOS device, there's a couple of steps to complete.

First, run the Capacitor open command, which opens the native iOS project in Xcode:

```bash
ionic cap open ios
```

## Livereload on external devices

```bash
ionic cap run ios -l --external

ionic cap run android -l --external
```
