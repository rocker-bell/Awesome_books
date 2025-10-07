import {Routes, Route} from "react-router-dom";
import Structure from "./Components/Strructure";
const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Structure/>} />
    </Routes>

  )
}

export default App