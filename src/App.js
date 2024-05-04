// React router dom
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Error from './pages/Error';
import About from './pages/About';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyAndSupport from "./pages/PrivacyAndSupport";

const options = {
  basename: "/art-of-gardens",
};

// Layout
const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Outlet />
      <Footer/>
    </>
  );
};

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/privacy",
        element: <PrivacyAndSupport />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, options);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
