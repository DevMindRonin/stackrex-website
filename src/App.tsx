import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import "./styles/styles.css";
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
