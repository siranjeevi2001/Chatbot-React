# React Chatbot Application - File Structure

## Project Overview
A plug-and-play React chatbot application supporting both guest and authenticated users with session management and sidebar navigation.

---

## 📁 Root Directory Structure

```
chatbot-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── api/
│   │   ├── authApi.js
│   │   ├── chatApi.js
│   │   ├── sessionApi.js
│   │   └── userApi.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── avatar-default.png
│   │   │   └── bot-avatar.png
│   │   ├── icons/
│   │   └── styles/
│   │       └── variables.css
│   │
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── GuestAccess.jsx
│   │   │   └── AuthGuard.jsx
│   │   │
│   │   ├── Chat/
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   └── ChatHeader.jsx
│   │   │
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── SidebarHeader.jsx
│   │   │   ├── ChatHistoryList.jsx
│   │   │   ├── ChatHistoryItem.jsx
│   │   │   ├── NewChatButton.jsx
│   │   │   └── UserProfile.jsx
│   │   │
│   │   ├── Session/
│   │   │   ├── SessionManager.jsx
│   │   │   ├── SessionList.jsx
│   │   │   ├── SessionItem.jsx
│   │   │   └── SessionActions.jsx
│   │   │
│   │   ├── Layout/
│   │   │   ├── MainLayout.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MobileMenu.jsx
│   │   │
│   │   └── Common/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       ├── Loading.jsx
│   │       ├── ErrorBoundary.jsx
│   │       └── Toast.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ChatContext.jsx
│   │   ├── SessionContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useChat.js
│   │   ├── useSession.js
│   │   ├── useLocalStorage.js
│   │   ├── useWebSocket.js
│   │   └── useDebounce.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── chatService.js
│   │   ├── sessionService.js
│   │   ├── storageService.js
│   │   └── websocketService.js
│   │
│   ├── store/
│   │   ├── index.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── chatSlice.js
│   │   │   └── sessionSlice.js
│   │   └── middleware/
│   │       └── sessionMiddleware.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   └── apiClient.js
│   │
│   ├── config/
│   │   ├── app.config.js
│   │   ├── api.config.js
│   │   └── theme.config.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── chat.css
│   │   ├── sidebar.css
│   │   └── responsive.css
│   │
│   ├── types/
│   │   ├── auth.types.js
│   │   ├── chat.types.js
│   │   └── session.types.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .env.example
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js (or webpack.config.js)
```

---

## 📝 Detailed Component Breakdown

### **1. Authentication Components** (`components/Auth/`)
- **Login.jsx** - User login form
- **Register.jsx** - User registration form
- **GuestAccess.jsx** - Guest mode initialization
- **AuthGuard.jsx** - Route protection wrapper

### **2. Chat Components** (`components/Chat/`)
- **ChatContainer.jsx** - Main chat wrapper
- **ChatWindow.jsx** - Chat display area
- **MessageList.jsx** - Scrollable message container
- **Message.jsx** - Individual message bubble
- **MessageInput.jsx** - Text input with send button
- **TypingIndicator.jsx** - "Bot is typing..." indicator
- **ChatHeader.jsx** - Chat title and actions

### **3. Sidebar Components** (`components/Sidebar/`)
- **Sidebar.jsx** - Main sidebar container
- **SidebarHeader.jsx** - Logo and toggle
- **ChatHistoryList.jsx** - List of previous chats
- **ChatHistoryItem.jsx** - Individual chat preview
- **NewChatButton.jsx** - Start new conversation
- **UserProfile.jsx** - User info and logout

### **4. Session Components** (`components/Session/`)
- **SessionManager.jsx** - Session lifecycle management
- **SessionList.jsx** - Display user sessions
- **SessionItem.jsx** - Individual session card
- **SessionActions.jsx** - Resume/Delete session actions

---

## 🔧 Core Services

### **API Services** (`api/`)
- **authApi.js** - Authentication endpoints
- **chatApi.js** - Chat message endpoints
- **sessionApi.js** - Session CRUD operations
- **userApi.js** - User profile endpoints

### **Business Services** (`services/`)
- **authService.js** - Authentication logic
- **chatService.js** - Chat processing logic
- **sessionService.js** - Session persistence
- **storageService.js** - LocalStorage/SessionStorage wrapper
- **websocketService.js** - Real-time communication

---

## 🎯 Context Providers

### **AuthContext** (`context/AuthContext.jsx`)
```javascript
// Manages:
- User authentication state
- Guest mode state
- Login/Logout functions
- Token management
```

### **ChatContext** (`context/ChatContext.jsx`)
```javascript
// Manages:
- Current chat messages
- Active conversation
- Message sending/receiving
- Chat history
```

### **SessionContext** (`context/SessionContext.jsx`)
```javascript
// Manages:
- Active session
- Session creation/restoration
- Session persistence
- Session metadata
```

---

## 🪝 Custom Hooks

- **useAuth** - Authentication state and methods
- **useChat** - Chat functionality
- **useSession** - Session management
- **useLocalStorage** - Persistent storage
- **useWebSocket** - Real-time updates
- **useDebounce** - Input debouncing

---

## 🗄️ State Management (Redux/Zustand)

### **Slices** (`store/slices/`)
- **authSlice** - User and guest state
- **chatSlice** - Messages and conversations
- **sessionSlice** - Session data

---

## 📦 Configuration Files

### **app.config.js**
```javascript
export const APP_CONFIG = {
  name: 'ChatBot',
  version: '1.0.0',
  maxGuestSessions: 5,
  maxMessageLength: 1000,
  sessionTimeout: 30 * 60 * 1000, // 30 minutes
};
```

### **api.config.js**
```javascript
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  endpoints: {
    auth: '/auth',
    chat: '/chat',
    sessions: '/sessions',
  },
};
```

---

## 🔐 Environment Variables (.env.example)

```env
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_WS_URL=ws://localhost:3001
REACT_APP_GUEST_MODE_ENABLED=true
REACT_APP_MAX_GUEST_MESSAGES=50
REACT_APP_SESSION_STORAGE_KEY=chatbot_sessions
```

---

## 📱 Key Features Support

### **Guest User Support**
- Temporary session creation
- LocalStorage persistence
- Limited message history
- Option to convert to registered user

### **Registered User Support**
- Permanent session storage
- Unlimited chat history
- Cross-device sync
- Profile management

### **Session Handling**
- Auto-save conversations
- Resume previous chats
- Export chat history
- Delete old sessions

### **Sidebar Features**
- Collapsible design
- Search chat history
- Filter by date
- Responsive mobile menu

---

## 🎨 Styling Approach

- **CSS Modules** or **Styled Components**
- **Tailwind CSS** (optional)
- **Responsive design** (mobile-first)
- **Dark/Light theme** support

---

## 📊 Data Flow

```
User Action → Component → Hook → Service → API → Backend
                ↓           ↓       ↓
              Context → Store → LocalStorage
                ↓
              Re-render
```

---

## 🚀 Next Steps (After Approval)

1. ✅ Initialize React project
2. ✅ Set up folder structure
3. ✅ Install dependencies
4. ✅ Create context providers
5. ✅ Build core components
6. ✅ Implement authentication
7. ✅ Add session management
8. ✅ Integrate chat functionality
9. ✅ Style and polish UI
10. ✅ Testing and deployment

---

## 📚 Recommended Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x",
    "axios": "^1.x",
    "socket.io-client": "^4.x",
    "@reduxjs/toolkit": "^1.x",
    "react-redux": "^8.x",
    "uuid": "^9.x",
    "date-fns": "^2.x"
  }
}
```

---

## ✅ Review Checklist

- [ ] File structure clear and organized?
- [ ] All features covered (guest/user/session)?
- [ ] Scalable and maintainable?
- [ ] Missing any components?
- [ ] Ready to proceed with implementation?

---

**Please review this structure and let me know if you'd like any modifications before we proceed to the coding phase!**