import Home from './component/Home'
import Navbar from './component/Navbar'

function App() {
const title = "Welcome to the Web app";
const visit = 512;
  return (
    <>
        <div className="App">
          <Navbar />
        <div className="content">
        <Home />
        </div>
        <h1>{title}</h1>
        <p>Visted {visit} time in 24hours.</p>
      </div>
    </>
  )
}

export default App
