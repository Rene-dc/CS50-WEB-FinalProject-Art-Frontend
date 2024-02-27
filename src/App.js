import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import './App.css';
import Root from './components/Root.js'
import PeinturesListPage from './pages/PeinturesListPage.js';
import RandomPeinturePage from './pages/RandomPeinturePage.js';
import GravuresListPage from './pages/GravuresListPage.js';
import PeinturesViewPage from "./pages/PeinturesViewPage.js";
import GravuresViewPage from "./pages/GravuresViewPage.js"
import SoloExpositionsListPage from './pages/SoloExpositionsListPage.js';
import GroupExpositionsListPage from './pages/GroupExpositionsListPage.js';
import BiographyPage from "./pages/BiographyPage.js";
import ContactPage from "./pages/ContactPage.js";
import { LanguageProvider } from "./context/LanguageContext.js";

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <RandomPeinturePage />,
      },
      {
        path: 'oeuvres/',
        element: <Outlet />,
        children: [
          {
            path: 'peintures/',
            element: <Outlet />,
            children: [
              {
                path: '',
                element: <PeinturesListPage />,
              },
              {
                path: ':peintureId',
                element: <PeinturesViewPage />,
              },
            ]
          },
          {
            path: 'gravures/',
            element: <Outlet />,
            children: [
              {
                path: '',
                element: <GravuresListPage />,
              },
              {
                path: 'gravures/:gravure-id',
                element: <GravuresViewPage />,
              },
            ]
          },
        ],
      },
      {
        path: 'expositions/',
        element: <Outlet />,
        children: [
          {
            path: 'personnelles',
            element: <SoloExpositionsListPage />,
          },
          {
            path: 'groupees',
            element: <GroupExpositionsListPage />,
          }
        ]
      },
      {
        path: 'biographie',
        element: <BiographyPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
    ],
  }
]);

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}

export default App;
