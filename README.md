### Youtube-v2 -  React TypeScript Application README

Welcome to the React TypeScript YouTube Frontend application! This project is a cutting-edge web application that leverages React and TypeScript to provide a dynamic and feature-rich user experience for browsing and searching YouTube videos. In this README, you'll find information on the core features and how to get started with the application.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Getting Started](#getting-started)
 
 

## Project Overview

The React TypeScript YouTube Frontend application is a modern, interactive, and responsive web application that provides a seamless platform for users to discover and explore YouTube videos. It's built with React and TypeScript, which ensures robust and type-safe code, making development and maintenance more efficient.

## Key Features

### 1. State Management with Redux Toolkit

- This application harnesses the power of Redux Toolkit to manage the application's state effectively. Redux facilitates centralized state management and ensures that user interactions are seamlessly integrated into the application's flow.

### 2. Routing with Redux Router DOM v6

- Redux Router DOM is employed for handling application navigation. It ensures a smooth and intuitive user experience while exploring the application's various features and content.

### 3. Data Fetching with Youtube api

- The application is connected to the YouTube Data API, enabling users to search for and access YouTube content effortlessly. It leverages the YouTube API to retrieve video data and details, ensuring a rich and up-to-date experience.

### 4. Caching for Improved Performance

- The application features a robust caching mechanism that stores previously fetched data. This approach minimizes the need for repeated API calls, improving application and user experience.

### 5. Debouncing Search

- To optimize search functionality, the application implements debouncing. This ensures that API requests are made only after a certain delay, preventing excessive requests and reducing server load.

### 6. Live Chat
- Replicated the Live Chat feature in watch page where you can send message 

### 7. Nested Comments
- Created a nested comments view using recursion

### 8. Infinite Scroll
- As we scroll down a new videos comes up

### 9. Fetching Data depending upon different region
- Fetching the data using youtube api depending upon region

### 10. Playing the video on hover
- Implemented the concept of video playing on hover

## Getting Started

To begin using the React TypeScript YouTube Frontend application, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install` or `yarn install`.
3. Obtain a YouTube Data API key from the [YouTube Developer Console](https://console.developers.google.com/).
 

#### Note- Search functionality works only when cors is enabled in browser through extension