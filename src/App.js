import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from 'bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class='row justify-content-start'>
      <Jumbotron />
      </div>
    </div>
  );
}

export default App;
