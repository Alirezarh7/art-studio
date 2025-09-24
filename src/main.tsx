import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {SnackbarProvider} from "notistack";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <SnackbarProvider autoHideDuration={4000}
                          iconVariant={{
                              success: '✅',
                              error: '❌',
                              warning: '⚠️',
                              info: '📢',
                          }}
        />
        <StrictMode>
            <App/>
        </StrictMode>
    </BrowserRouter>
    ,
)
