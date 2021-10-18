import "./App.css";
import Info from "./componentes/info/Info.js";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info />
      </section>
      <main className="main"></main>
    </div>
  );
}

export default App;
