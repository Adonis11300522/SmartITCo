import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screens/home/HomePage';
import { ClientLayout } from './components/layouts/Layout';
import ContactPage from './screens/contact/ContactPage';
import AboutPage from './screens/about/AboutPage';
import TeamPage from './screens/team/TeamPage';
import ServicesPage from './screens/services/ServicesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ClientLayout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/team' element={<TeamPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/service' element={<ServicesPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
