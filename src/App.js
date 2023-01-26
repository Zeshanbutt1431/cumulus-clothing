import './App.css';
import { BrowserRouter as Router,Routes, Route }  from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/Shop';

function App() {
  return (
    // <Homepage/>
    // <ShopPage/>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />}/>
      </Routes>
      
  </Router>
  );
}

export default App;
