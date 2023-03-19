import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";
import { Dashboard, Home, Layout, Login, Register, Test, Users, Quize} from "./routes/Routes";

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
            path="login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <Suspense fallback={<Loader />}>
                <Users/>
              </Suspense>
            }
          />
          <Route
            path="/dashboard/test"
            element={
              <Suspense fallback={<Loader />}>
                <Test/>
              </Suspense>
            }
          />
          
          <Route
            path="quize"
            element={
              <Suspense fallback={<Loader />}>
                <Quize/>
              </Suspense>
            }
          />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
