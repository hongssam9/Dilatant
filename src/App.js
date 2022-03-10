import './App.css';
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"
import About from "./components/About.jsx"
import Overview from "./components/Overview.jsx"
import Report from "./components/Report.jsx"
import Info from "./components/Info.jsx"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Overview />  
      <Report /> 
      <Info />   
    </div>
  );
}

export default App;
