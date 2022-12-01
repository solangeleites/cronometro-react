import Contenedor from "./components/Contenedor/Contenedor";
import ContenedorCronometro from "./components/BoxCronometro/Cronometro";
import GlobalStyles from "./components/GlobalStyle/GlobalStyle";
import Cronometro from "./components/Cronometro/Cronometro";

function App() {
  return (
    <Contenedor>
      <ContenedorCronometro>
        <Cronometro />
      </ContenedorCronometro>
          <GlobalStyles />
    </Contenedor>


  );
}

export default App;
