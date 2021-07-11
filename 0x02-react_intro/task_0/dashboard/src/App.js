import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <header className='app__header'>
        <img src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <main role='main' className='app__body'>
        <p>Login to access the full dashboard</p>
      </main>
      <footer className='app__footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </>
  );
}

export default App;
