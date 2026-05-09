import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Router';
import { ToastContainer } from 'react-toastify';
import { TimelineContextProvider } from './context/TimelineProvider';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineContextProvider>
      <RouterProvider router={router} />,
      <ToastContainer />
    </TimelineContextProvider>
  </StrictMode>,
);

