import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import header from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/header.JPG";


function App() {
  return (
    <Container>
        <Banner style={{
        background: `url(${header})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      > 
          <Header />
          <ProfComponent />
        </Banner>
      <Services />
      <LightColor>
        <Projects />
      </LightColor>
      <Clients />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(
    159deg,
    rgb(224, 224, 224) 0%,
    rgb(224, 224, 224) 100%
  );
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
