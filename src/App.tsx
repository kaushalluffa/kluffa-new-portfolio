import Navigation from './components/Navigation/Navigation';
import './App.scss';
import Footer from './components/Footer/Footer';
import AllRoutes from './components/AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
