import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes';
import BookProvider from './constext/BookProvider';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BookProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
     </BookProvider>
  </StrictMode>,
)
