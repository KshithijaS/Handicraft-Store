import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from './components/Store.js'
import Header from './components/Header';
import UpdatePage from './components/UpdatePage';

function App() {
  return (
      <div >
        <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Store />} />
          <Route path="/" element={<Store />}></Route>
          <Route path="/editProduct/:id" element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
