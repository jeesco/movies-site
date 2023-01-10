import { MoviesGrid } from "./components/MoviesGrid";
import './index.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='title'>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
