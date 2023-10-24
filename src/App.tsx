import "./index.css";
import { Header } from "./components/Header";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import { Body } from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";
import { Results } from "./components/Results";
 
import ReactDOM from 'react-dom/client';
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
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Outlet/>
    </Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={appRouter} />
);
export default App;
