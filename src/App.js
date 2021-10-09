import { GlobalStyle } from "./GlobalStyles";

import TopBar from "./components/TopBar";
import Routes from "./routes";

function App() {
  let title = "Minha Loja";
  
  return (
    <>
      <GlobalStyle />
      <TopBar title = {title}/>
      <Routes />
    </>
  );
  
}

export default App;