import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  var data = [['Blusa x','11111', '206,75'],['Blusa y','22222','150,54'],['Blusa z','22222','150,54'],['Blusa y','22222','150,54'],['Blusa y','22222','150,54'],['Blusa y','22222','150,54']]
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index data={data}/>}></Route>
          <Route path="/teste"></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
