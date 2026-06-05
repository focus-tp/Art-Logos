import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Подключаем наши локальные шрифты:
import '@fontsource/manrope';
import '@fontsource/comfortaa';

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Для корневого домена basename не нужен вообще */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);