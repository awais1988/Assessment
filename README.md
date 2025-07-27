# React Native Assessment

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## 📋 Table of Contents

- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Setup Guide](#-setup-guide)
- [Running the App](#-running-the-app)
- [Building for Production](#-building-for-production)
- [Troubleshooting](#-troubleshooting)

## 📂 Project Structure

src/

    ─ appNavigator/             # Navigation logic
        ─ index.tsx
    ─ commonComponents/         # Shared components
        ─ Header.tsx
        ─ Navbar.tsx
        ─ ScreenContainer.tsx
    ─ constants/                # App constants
        ─ ColorConst.tsx
    ─ screens/                  # App screens
        ─ Calculator.tsx
        ─ Home.tsx
        ─ TwoSum.tsx
    ─ utils/                    # Utility functions
        ─ twoSum.ts

## ⚙️ Prerequisites

- Node.js v20.x ([Download](https://nodejs.org/))
- Yarn (`npm install -g yarn`)
- Xcode (for iOS development)
- Android Studio (for Android development)
- Ruby (for iOS dependencies)

## 🛠️ Setup Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/awais1988/Assessment
   cd Assessment
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Install iOS dependencies (macOS only):
   ```bash
   cd ios && bundle install && pod install && cd ..
   ```

## 🚀 Running the App

**iOS**

```bash
   yarn ios
```

**Android**

```bash
   yarn android
```

**Ensure Android emulator is running or device is connected.**

## 🔧 Building for Production

**iOS**

```bash
   cd ios && xcodebuild -workspace App.xcworkspace -scheme App -configuration Release
```

**Android**

```bash
   cd android && ./gradlew assembleRelease
```

## ⚠️ Troubleshooting

| Issue                         | Solution                                                                  |
| ----------------------------- | ------------------------------------------------------------------------- |
| Metro Bundler crashes         | Run `yarn start --reset-cache`                                            |
| iOS build fails               | Check `pod install` and Ruby version (`>= 2.7`)                           |
| Yarn errors                   | Delete `node_modules` and `yarn.lock`, then run `yarn install`            |
| Android emulator not starting | Ensure Android Studio's SDK tools are properly installed                  |
| Missing iOS dependencies      | Run `cd ios && pod install && cd ..`                                      |
| TypeScript compilation errors | Check for type inconsistencies and run `yarn tsc --noEmit` for validation |
| App crashes on launch         | Clear cache: `yarn cache clean` and rebuild                               |

## ❓ Need Help?

📧 Email: awaisahmed88@gmail.com  
📱 WhatsApp: [0092 3347519288]
