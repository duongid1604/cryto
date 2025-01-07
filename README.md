# Project Name: Crypto

## Overview
Crypto is a React Native application designed to deliver a seamless and responsive experience for users. This document explains the project's code structure, tech stack, and the purpose of its key components.

---

## Tech Stack

### Core Technologies:
- **React Native (v0.76.5)**: Used for building the mobile application.
- **React (v18.3.1)**: Core library for building UI components.
- **TypeScript (v5.0.4)**: Enhances code maintainability and developer productivity with static typing.

### State Management:
- **@tanstack/react-query**: For efficient and simplified server-state management.
- **React Context API**: For managing global state (contexts).

### Navigation:
- **React Navigation**:
   - `@react-navigation/native`
   - `@react-navigation/bottom-tabs`
   - `react-native-screens`

### Networking:
- **Axios**: For HTTP requests and API communication.

### UI & Theming:
- **@eva-design/eva** and **@ui-kitten/components**: For building visually appealing UI components with theming support.
- **react-native-reanimated**: For animations.

### Localization:
- **i18next** and **react-i18next**: For supporting multiple languages.

### Testing:
- **Jest**: For unit testing.
- **@testing-library/react-native**: For component testing in React Native.

---

## Project Structure

### Folder Structure:
```
crypto/
├── .bundle/            # Generated build files
├── .vscode/            # Editor configurations
├── android/            # Android platform-specific files
├── ios/                # iOS platform-specific files
├── node_modules/       # Installed npm packages
├── src/                # Main source folder
│   ├── api/            # API service and utility files
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── components/     # Reusable UI components
│   ├── constants/      # App-wide constants
│   ├── contexts/       # React Context API for global state management
│   ├── locales/        # Localization files for i18n
│   ├── navigation/     # Navigation configuration
│   ├── screens/        # App screens and their components/styles
│   │   ├── Home/       # Home screen folder
│   │   ├── Login/      # Login screen folder
│   │   │   ├── __tests__/    # Unit tests for the screen
│   │   │   ├── components/  # Sub-components for Login
│   │   │   ├── index.tsx    # Login screen entry file
│   │   │   └── styles.ts    # Login screen styles
│   │   ├── Market/     # Market screen folder
│   │   ├── More/       # More screen folder
│   │   ├── Portfolio/  # Portfolio screen folder
│   │   ├── SplashScreen/ # Splash Screen folder
│   │   ├── Wallet/     # Wallet screen folder
│   ├── types/          # TypeScript types and interfaces
│   ├── utils/          # Utility functions/helpers
├── vendor/             # Third-party custom modules
├── .eslintrc.js        # ESLint configuration
├── .prettierrc.js      # Prettier configuration
├── .gitignore          # Git ignore rules
├── app.json            # App-wide configuration file
```

### Explanation of Key Folders:

1. **`api/`**:
   - Contains API service files to centralize network requests.

2. **`assets/`**:
   - Stores static resources like images and fonts.

3. **`components/`**:
   - Reusable UI components that can be shared across screens.

4. **`contexts/`**:
   - Houses context providers for managing global state using React Context API.

5. **`locales/`**:
   - Localization files (e.g., JSON files) for supporting multiple languages using `i18next`.

6. **`navigation/`**:
   - Configuration for app navigation, using `react-navigation`.

7. **`screens/`**:
   - Organized by feature or screen. Each folder typically includes:
      - `index.tsx`: Main component for the screen.
      - `styles.ts`: Style definitions.
      - `components/`: Sub-components specific to the screen.
      - `__tests__/`: Unit tests for the screen.

8. **`types/`**:
   - Centralized TypeScript type definitions and interfaces.

9. **`utils/`**:
   - Helper functions that can be used across the app.

---

## Available Scripts
- `yarn start`: Start the Metro bundler.
- `yarn android`: Run the app on Android.
- `yarn ios`: Run the app on iOS.
- `yarn lint`: Check for linting errors.
- `yarn test`: Run unit tests.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any inquiries or support, contact duong16042000@gmail.com.
