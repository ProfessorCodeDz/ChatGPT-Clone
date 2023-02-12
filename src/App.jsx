import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Main from "./components/main/Main";

function App() {
  const [showapp, setShowapp] = useState(false);

  return (
    <div className="App container">
      <Header />
      <Main />
      {!showapp && <Login setShowapp={setShowapp} />}
      <Footer />
    </div>
  );
}

export default App;
