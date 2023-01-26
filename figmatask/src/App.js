import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Kurs from './pages/Kurs';
import Platform from './pages/Platform';
import Training from './pages/Training';
import Program from './pages/Program';

function App() {
  return (
    <div className="App">
      <Header/>
      <Kurs/>
      <Platform/>
      <Training/>
      <Program/>
    </div>
  );
}

export default App;
