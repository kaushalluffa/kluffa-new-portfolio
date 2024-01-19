import Navigation from './components/Navigation/Navigation';
import './App.scss';
import Footer from './components/Footer/Footer';
import AllRoutes from './components/AllRoutes/AllRoutes';
import ScrollToTop from './components/shared/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
