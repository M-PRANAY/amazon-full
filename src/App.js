import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" 
function App() {
	return <div className="App">
    {/* Header */}
    <Header />

    {/* Home */}
    <Home />
  </div>;
}

export default App;
