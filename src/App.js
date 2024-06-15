import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './views/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <footer className='footer'>
        <p>Copyright © 2024 - Vdhatri Homes . All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
