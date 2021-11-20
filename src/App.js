import { useRoutes } from 'hookrouter';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Home from "./pages/Home";
import Portfolio from './pages/Potfolio';
import ImageViewer from './pages/ImageViewer';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './pages/PageStyles.css';

function App() {

  const routes = {
    '/' : () => <Welcome/>,
    '/home' : () => <Home />,
    '/portfolio' : () => <Portfolio />,
    '/portfolio/:image' : ({image}) => <ImageViewer image = {image} />
  };

  const routeResults = useRoutes(routes);

  return (
    <div style = {{width:"100%"}}>
      <Header visible = {(window.location.pathname.includes("home") || window.location.pathname.includes("portfolio"))} />
      { routeResults != null ? routeResults : <NotFound/> }
      <Footer visible = {(window.location.pathname.includes("home") || window.location.pathname.includes("portfolio"))} />
    </div>
  );
}

export default App;