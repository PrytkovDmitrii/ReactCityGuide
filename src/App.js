import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Attraction from "./pages/Attraction/Attraction";
import Contacts from "./pages/Contacts/Contacts";
import MapPage from "./pages/Map/MapPage";
import NotFound from "./pages/NotFound";
import AllAttractions from "./pages/AllAttractions/AllAttractions";
import Loader from "./components/Loader";
import AttractionPage from "./pages/AllAttractions/AttractionPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Loader />
      <Header />
      <main>
        <Routes>
          <Route path="ReactCityGuide/" element={<Home />} />
          <Route path="ReactCityGuide/attract" element={<Attraction />} />
          <Route
            path="ReactCityGuide/all-attract"
            element={<AllAttractions />}
          />
          <Route
            path="ReactCityGuide/all-attract/:id"
            element={<AttractionPage />}
          />
          <Route path="ReactCityGuide/contacts" element={<Contacts />} />
          <Route path="ReactCityGuide/maps" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
