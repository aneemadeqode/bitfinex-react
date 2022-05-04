import "../App.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Bitfinex</h1>
          <ul className="nav-items">
            <li className="nav-item">
              <a href="./">Chart</a>
            </li>
            <li className="nav-item">
              <a href="./orders">Orders</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
