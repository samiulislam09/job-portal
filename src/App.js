import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Editjob from "./pages/Editjob";
import CreateJob from "./pages/CreateJob";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import EditJobsData from "./components/EditJobsData";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" />
            <Route element={<Editjob />} path="/updatejobs/:id" />
            <Route
              element={<EditJobsData />}
              path="/updatejobsdata/:id/:index"
            />

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
