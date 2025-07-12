import { Router } from "./router/Router";
import { FooterComponent } from "./views/Components/FooterComponent";
import { HeaderComponent } from "./views/Components/HeaderComponent";

function App() {
  return (
    <>
      <div className="layout-wrapper">
        <HeaderComponent></HeaderComponent>
        <main className="layout-content container py-4  d-flex justify-content-center align-items-center">
          <Router></Router>
        </main>
        <FooterComponent></FooterComponent>
      </div>
    </>
  );
}

export default App;
