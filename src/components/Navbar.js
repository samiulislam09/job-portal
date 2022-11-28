import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import useUserData from "../hooks/useUserData";

function Navbar() {
  const [user, setUser] = useUserData();
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    setUser("");
    navigate("/login");
  };
  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              job portal
            </Link>
          </Typography>
          <Box>
            {user?.data && (
              <Button onClick={logOut} sx={{ color: "#fff" }}>
                LogOut
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
