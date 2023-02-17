import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import RestuarantView from './components/RestuarantView';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/view-restuarant/:id' element={<RestuarantView />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
