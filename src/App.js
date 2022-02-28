import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NosFond from './components/fonds/NosFond';

import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <NosFond/>
    </div>
  );
}

export default App;
