# 📝 To-Do List App

A modern task management application built with React and Firebase

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-9.0.0-FFCA28?logo=firebase)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)


## 🛠️ Tech Stack

- **Frontend:** React 18 with Hooks
- **Build Tool:** Vite
- **Backend:** Firebase/Firestore
- **Styling:** Modern CSS with Flexbox
- **Development:** ES6+ JavaScript

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhuvan-S-prasad/todo-firebase.git
   cd to-do-list-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
to-do-list-app/
├── src/
│   ├── components/
│   │   ├── AddTodo.jsx      # Task creation component
│   │   ├── TodoList.jsx     # Task list container
│   │   └── TodoItem.jsx     # Individual task component
│   ├── firebase.js          # Firebase configuration
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   └── main.jsx           # Application entry point
├── public/
├── .env                    # Environment variables
└── package.json           # Project dependencies
```

## 💡 Core Functionality

### Task Management
- **Create:** Add new tasks with a title and optional description
- **Read:** View all tasks in real-time
- **Update:** Toggle task completion status
- **Delete:** Remove tasks from the list

### Real-time Updates
All changes are instantly synchronized with Firebase Firestore, ensuring data consistency across sessions.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🎯 Enhancement Challenges

Take your skills to the next level with these challenges:

1. **Feature Enhancements**
   - [ ] Add task editing functionality
   - [ ] Implement task categories/tags
   - [ ] Add due dates and reminders

2. **UI Improvements**
   - [ ] Implement dark/light theme toggle
   - [ ] Add animations for task actions
   - [ ] Create a mobile-responsive design

3. **Authentication**
   - [ ] Add user authentication
   - [ ] Implement social login options
   - [ ] Add user profiles

4. **Deployment**
   - [ ] Deploy to Firebase Hosting
   - [ ] Set up continuous deployment
   - [ ] Add custom domain


Made with ❤️ and React by Bhuvan S # todo-firebase
