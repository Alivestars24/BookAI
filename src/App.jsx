import "./App.css";
import SampleBooks from "./pages/SampleBooks";
import backgroundImage from "./assets/bg.png"

function App() {
  return (
    <div  style={{ 
      background: 'linear-gradient(135deg, #1e0533, #110a1f)',  // Background gradient
      color: '#ffffff'  // Text color
  }}>
      <SampleBooks/>
    </div>
  );
}

export default App;
