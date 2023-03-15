
import { Route, Routes } from "react-router-dom";
import Homepage from "./component/container/Homepage/Homepage"
import Layout from "./component/container/Layout/Layout";
import Test from "./component/container/Test/Test"
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}/>
            <Route path="/test" element={<Test />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
