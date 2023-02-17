import {Routes, Route} from 'react-router-dom';
import Games from './pages/Games';
import About from './pages/About';
import NotFound from './pages/NotFound';
import MainLayout from './pages/layout/MainLayout';
import Contact from './pages/Contact';
import Main from './components/Main';
import Gears from './pages/Gears';
import Login from './pages/Login';
import Register from './pages/Signup';

function App() {

  return (
    <div className='App'>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/games" element={<Games />}></Route>
                        <Route path="/gears" element={<Gears />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>

                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
    </div>
  )
}

export default App
