# 📚 StudySpot

StudySpot is a beginner-friendly React Native mobile application designed to help students discover and organize study locations based on their individual study preferences.

The app allows users to browse available study spots, search for specific locations, filter locations by amenities, and save favorite study spots.

## 🚀 Project Overview

Finding the right place to study can depend on several factors, such as noise level, available outlets, Wi-Fi, location, and personal preferences.

StudySpot was created to provide a simple and user-friendly way for students to browse study locations and quickly identify which spaces fit their needs.

This project is also being used as a hands-on learning project to build foundational skills in React Native, JavaScript, mobile UI design, and state management.

## ✨ Features

### 🔍 Search Study Spots
Users can search for a study location by name using the search bar.

### 🔎 Filter Study Spots
Study locations can be filtered based on available amenities:

- All
- Quiet
- Wi-Fi
- Outlets

Search and filtering can also be combined to narrow down results.

### ⭐ Favorite Study Spots
Users can select the star next to a study location to add or remove it from their favorites.

Favorites are managed using React state.

### 📍 Study Spot Information
Each study spot currently includes:

- Name
- Location
- Rating
- Quiet environment availability
- Outlet availability
- Wi-Fi availability

## 🛠️ Technologies Used

- **React Native** — Mobile application framework
- **Expo** — Development and testing environment
- **JavaScript** — Application logic
- **React Hooks** — State management
- **React Native StyleSheet** — UI styling
- **FlatList** — Efficiently displaying study locations
- **VS Code** — Development environment

## 📱 Current Study Spots

The current version of the application includes sample study locations such as:

| Study Spot | Location | Rating | Quiet | Outlets | Wi-Fi |
|---|---|---:|:---:|:---:|:---:|
| Newman Library | Main Campus | 4.5 | ✅ | ✅ | ✅ |
| Campus Coffee Shop | Student Center | 4.2 | ❌ | ✅ | ✅ |
| Engineering Building | North Campus | 4.7 | ✅ | ✅ | ✅ |

## 🧠 React Native Concepts Practiced

This project focuses on learning the fundamentals of React Native and React, including:

- Functional components
- JSX
- `useState`
- Props
- Event handling
- Conditional rendering
- Array methods such as `filter()` and `includes()`
- The JavaScript spread operator
- `FlatList`
- `TextInput`
- `Pressable`
- React Native styling
- Dynamic rendering based on state
- Combining search and filtering logic

## 📂 Project Structure

The project currently uses a simple structure while the application is being developed:

```text
StudySpot/
│
├── assets/
│
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

⚙️ Getting Started
Prerequisites

Before running the project, make sure you have:

Node.js installed
npm installed
Expo available through the project
A code editor such as VS Code
Expo Go on a physical mobile device, or an Android/iOS emulator
1. Clone the repository
git clone https://github.com/Mena-GX/StudySpot.git
2. Navigate into the project
cd StudySpot
3. Install dependencies
npm install
4. Start the Expo development server
npx expo start
5. Open the application

After starting Expo, you can open the application using:

Expo Go on a physical device
Android Emulator
iOS Simulator

When using Expo Go, make sure your mobile device and computer are connected to the same Wi-Fi network.

🖥️ Development

The application is currently being developed incrementally.

The primary application logic is located in:

App.js

Changes made to the application are reflected through Expo's development environment while the app is running.

🔮 Future Improvements

StudySpot is an ongoing project. Planned improvements include:

Navigation
Add multiple screens
Create a dedicated study spot details screen
Add a favorites screen
Add an "Add Study Spot" screen
Study Spot Details
Add detailed descriptions
Add photos
Add additional amenities
Add study recommendations
User-Created Study Spots
Allow users to add their own study locations
Add form validation
Allow users to edit and delete their study spots
Data Persistence
Save favorite study spots between app sessions
Store user-created study locations locally
UI/UX Improvements
Improve visual design
Add custom icons
Add animations
Improve accessibility
Add dark mode
Future Backend

A future version could introduce a backend and database to allow study spots and user data to be shared across devices.

🎯 Learning Goals

The primary goal of StudySpot is to strengthen my understanding of mobile application development and React Native fundamentals through hands-on development.

Through this project, I am practicing how to:

Build mobile interfaces with React Native
Manage application state with React Hooks
Handle user interactions
Work with arrays and dynamic data
Build reusable UI components
Implement search and filtering functionality
Organize a growing React Native application
Develop an application incrementally from a basic prototype into a more complete product
👩‍💻 Author

Ximena

Computer Science student interested in front-end development, UI/UX, and building engaging user-focused applications.

📄 License

This project is licensed under the MIT License.
