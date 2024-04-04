import "./App.scss";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./core/utils/scrollToTop";
import { MainRoutes } from "./routes/routes";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;