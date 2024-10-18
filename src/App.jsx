import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="p-[2.4rem] lg:px-[4rem] lg:pb-[4rem] lg:pt-[3.2rem]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Work" element={<Work />} />

            <Route path="/About" element={<About />} />

            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
