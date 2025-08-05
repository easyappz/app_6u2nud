import logo from './logo.svg';
import ErrorBoundary from './ErrorBoundary';
import Calculator from './components/Calculator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Калькулятор</h1>
          </header>
          <main>
            <Routes>
              <Route path="/calculator" element={<Calculator />} />
              <Route path="*" element={<div>Страница не найдена</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
