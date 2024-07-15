import './App.scss';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Register from './pages/Register/Register'
import { StyledEngineProvider } from '@mui/material/styles';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'


function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
