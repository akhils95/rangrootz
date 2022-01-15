import { useRoutes } from 'hookrouter';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import ContactUs from "./pages/ContactUs";
import Portfolio from './pages/Potfolio';
import ImageViewer from './pages/ImageViewer';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './pages/PageStyles.css';

function App() {

  const routes = {
    '/' : () => <Welcome/>,
    '/home' : () => <Portfolio />,
    '/portfolio' : () => <Portfolio />,
    '/portfolio/:image' : ({image}) => <ImageViewer image = {image} />,
    '/contact-us' : () => <ContactUs />
  };

  const routeResults = useRoutes(routes);

  return (
    <div style = {{width:"100%"}}>
      <Header visible = {(window.location.pathname.includes("home") || window.location.pathname.includes("portfolio")
        || window.location.pathname.includes("contact"))} />
      { routeResults != null ? routeResults : <NotFound/> }
      <Footer visible = {(window.location.pathname.includes("home") || window.location.pathname.includes("portfolio")
        || window.location.pathname.includes("contact"))} />
    </div>
  );
}

export default App;