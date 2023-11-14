import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
import firebaseApp, { FirebaseContext } from './firebase/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider
      value={{
        firebaseApp
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseContext.Provider>
  </React.StrictMode >,
)
