import "./../../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "./Hero";
import Numbers from "./Numbers";
import Main from "./Main";
import Contact from "./Contact";
import RunningText from "../../components/RunningText";
const App = () => {
  return (
    <>
      <Hero />
      <Numbers />
      <Main />
      <RunningText />
      <Contact />
    </>
  );
};

export default App;
