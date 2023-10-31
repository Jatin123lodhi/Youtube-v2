import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Body } from './components/Body.tsx';
import { MainContainer } from './components/MainContainer.tsx';
import { WatchPage } from './components/WatchPage.tsx';
import { Results } from './components/Results.tsx';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: <WatchPage />,
          },
          {
            path: "/results",
            element: <Results />,
          },
        ],
      } 
    ]
  } 
  
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
