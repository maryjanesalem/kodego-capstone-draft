import {Routes, Route} from 'react-router-dom';
import Games from './pages/Games';
import About from './pages/About';
import NotFound from './pages/NotFound';
import MainLayout from './pages/layout/MainLayout';
import Contact from './pages/Contact';
import Main from './components/Main';
import Gears from './pages/Gears';

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

                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
    </div>
  )
}

export default App
