import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Editjob from "./pages/Editjob";
import CreateJob from "./pages/CreateJob";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<Editjob />} path="/edit-job" />
            <Route element={<CreateJob />} path="/create-job" />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
