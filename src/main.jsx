import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Cricket from './components/Cricket/Cricket.jsx';
import Football from './components/Football/Football.jsx';
import CricketDetails from './components/CricketDetails/CricketDetails.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/cricket',
        loader: () => fetch('cricket.json'),
        element: <Cricket></Cricket>
      },
      {
        path: '/cricket/:cricketId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.cricketId}`),
        element: <CricketDetails></CricketDetails>
      },
      {
        path: '/football',
        loader: () => fetch('football.json'),
        element: <Football></Football>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
