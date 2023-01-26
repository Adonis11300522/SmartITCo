import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screens/home/HomePage';
import { ClientLayout } from './components/layouts/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ClientLayout/>}>
            <Route path='/' element={<HomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
