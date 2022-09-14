import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./pages/MainPage";
import SpacePage from "./pages/SpacePage";
import MenuPage from "./pages/MenuPage";
import StorePage from "./pages/StorePage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/duidongsan_renewal/" element={<MainPage />}></Route>
          <Route
            path="/duidongsan_renewal//space"
            element={<SpacePage />}
          ></Route>
          <Route
            path="/duidongsan_renewal//menu"
            element={<MenuPage />}
          ></Route>
          <Route
            path="/duidongsan_renewal//store"
            element={<StorePage />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
