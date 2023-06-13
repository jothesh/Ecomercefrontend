import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import { ShopProvider } from "./components/ShopContext/ShopContext"


function App() {
  return (
    <div className="App">
      <ShopProvider>

      <Header/>
      
      {/* <Cardview/> */}
      {/* <Cardviewrow/> */}
      {/* <Cardviewanimation/> */}
      {/* <Home/> */}
     
     

        <Footer/>
      </ShopProvider>
    
     
    </div>
  );
}

export default App;