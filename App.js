import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import StyledGlobal from "./styledGlobal"
import { TelaInteira, ContainerMain } from "./styledGlobal"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"

function App() {

  function reproduzVideo(){
    alert("O vídeo está sendo reproduzido")
  }

  return(
    <>
    
      <StyledGlobal/>
      <TelaInteira>
        <Header/>
        <ContainerMain>
          <Nav />
          <Home reproduz={reproduzVideo}/>
          <Card/>
        </ContainerMain>
        <Footer/>
      </TelaInteira>
      
      
    </>
  );

}

export default App;