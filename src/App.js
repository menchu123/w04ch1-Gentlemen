import "./App.css";
import Button from "./componentes/button/Button.js";
import Card from "./componentes/card/Card.js";
import Info from "./componentes/info/Info.js";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info />
        <Button />
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Card />
        </ul>
      </main>
    </div>
  );
}

export default App;
