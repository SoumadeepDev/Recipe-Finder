import { MenuItem, Menu } from "semantic-ui-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Menu
      borderless
      fixed="top"
      className="nav-container"
      style={{ backgroundColor: "#fffef8" }}
    >
      <MenuItem>
        <img src={logo} alt="logo" style={{ width: 100 }} />
      </MenuItem>
      <Menu.Item name="Home" as={Link} to="/"></Menu.Item>
      <Menu.Item name="recipe" as={Link} to="/recipe"></Menu.Item>
    </Menu>
  );
};
export default NavBar;
