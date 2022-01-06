import { Flex, Spacer, VStack } from "@chakra-ui/react";
import { Clients } from "./Components/Clients";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Services } from "./Components/Services";

function App() {
  return (
    <div className="App">
      <VStack>
        <Header />
        <Spacer />
        <Main />
        <Spacer />
        <Services />
        <Spacer />
        <Clients />
        <Spacer />

        <Footer />
      </VStack>
    </div>
  );
}

export default App;
