import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './Registration';
import { Login } from './Login';
import Home from './Home';
import { PropertyForm } from './AddingProperties';
import ShowingData from './ShowingData';
import CardSite from './CardSite';
import SingleCard from './SingleCard';
import About from './About';
import HOMESINGLE from './HOMESINGLE';
import ContactPage from './Contact';
import NotFound from './NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/", element: <HOMESINGLE /> },
      { path: "/agents", element: <ShowingData /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Registration /> },
  { path: "siteDetails", element: <CardSite /> },
  { path: "ele/:id", element: <SingleCard /> },
  {path:"/addproperties",element:<PropertyForm/>}
  // 404 fallback route — must be last
  ,{ path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <div style={{ backgroundColor: '#f0fff0', color: '#556b2f', minHeight: '100vh' }}>
      <ToastContainer
        position="bottom-right"       // top-left, top-center, bottom-right, etc.
        autoClose={3500}           // milliseconds before auto-close
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick               // close when clicked
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
