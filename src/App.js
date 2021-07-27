import Features from './components/features';
import Navbar from './components/navbar';
import './App.css';
import Company from './components/company';

function App() {
  return (
    <div className='App'>
      <div className='navbar-component'>
        <Navbar />
      </div>
      <div className='features-component'>
        <Features />
      </div>

      <div className='company-name'>
        <Company />
      </div>
      <div className='form'>
        <div className='fields'>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
