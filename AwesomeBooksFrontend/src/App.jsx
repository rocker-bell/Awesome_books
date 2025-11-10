import {Routes, Route} from "react-router-dom";
import AwesomeBooks from "./Components/AwesomeBooks";
const App = () => {
  return (

    <Routes>
      <Route path="/" element={<AwesomeBooks/>} />
    </Routes>

  )
}

export default App