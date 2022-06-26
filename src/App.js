import {Routes, Route} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import MainPage from './pages/MainPage'
import SpacePage from './pages/SpacePage'
import MenuPage from './pages/MenuPage'
import StorePage from './pages/StorePage'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/space" element={<SpacePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/store" element={<StorePage />}></Route>
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;