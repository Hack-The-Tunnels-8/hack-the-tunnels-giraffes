import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";
import giraffeimg from "./girrafe.jpg"

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();
  const css = `
  .navbar {
    position: fixed;
    padding: 15px 32px;
  }`

  const button = `
  .navbar__account {
    background-color: #F56A23;
    padding: 15px 60px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
  }`

  return (
    <div className="navbar">
      <style>{css}</style>
      <div className="navbar__logo">
        <Link to="/">
          <img class="navimage" src={giraffeimg} alt="Girrafe lol" width="80" height="80"/>
        </Link>
      </div>
      <div className="navbar__account">
        <style>{button}</style>
        {loggedIn() === false ? (
          <>
            <button onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
