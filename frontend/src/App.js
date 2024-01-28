
import './App.css';
import MainRoute from './MainRoute/MainRoute';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar zindex={999} />
      <MainRoute /> 
      <Footer />
    </div>
  );
}

export default App;
