import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";
import 'materialize-css'
import {Loader} from "./components/Loader";

function App() {
  const { token, login, logout, userId, ready } = useAuth()
  const isAuthenticated = !!token

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId
    }}>
      <Router>
        { isAuthenticated && <Navbar />}
        <div className="container">
          <Routes isAuthenticated={isAuthenticated} />
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
