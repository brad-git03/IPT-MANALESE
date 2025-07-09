import './App.css';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Product from './components/Product';
import About from './pages/About';



function App() {
  return (
    <>
    <AppNavBar />
    <Home />
    <Product />
    <About />
    </>
  );
}

export default App;
