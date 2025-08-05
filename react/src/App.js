import logo from './logo.svg';
import ErrorBoundary from './ErrorBoundary';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Калькулятор</h1>
        </header>
        <main>
          <Calculator />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
