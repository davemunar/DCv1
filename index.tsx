import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importar App, no Home
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App /> {/* Renderizar el componente App */}
    </React.StrictMode>
  );
}