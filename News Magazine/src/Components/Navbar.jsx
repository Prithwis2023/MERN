import './Navbar.css'
export const Navbar = ({setCategory}) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="head badge bg-light text-dark">
              <h4>USNews</h4>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="list1 nav-item">
                <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
              </li>
              <li className="list1 nav-item">
                <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
              </li>
              <li className="list1 nav-item">
                <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
              </li>
              <li className="list1 nav-item">
                <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
              </li>
              <li className="list1 nav-item">
                <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
              </li>
              <li className="list1 nav-item">
                <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
