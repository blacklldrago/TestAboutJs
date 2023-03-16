import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";
import { Home, Layout, Test } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="test"
            element={
              <Suspense fallback={<Loader />}>
                <Test />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
