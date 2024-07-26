import { Link } from "react-router-dom";


export default function NavBar() {
  return (

    <nav className="navbar bg-primary navbar-expand-lg " data-bs-theme="light" >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}> Online Book Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            <Link className="nav-link" to={"/create"}>Add Book</Link>
            <Link className="nav-link" to={"/about"}>About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
