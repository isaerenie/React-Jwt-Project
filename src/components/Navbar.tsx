
import { NavLink, useNavigate } from "react-router-dom"
import { INavbar } from "../models/INavbar"
import { control } from "../utils/control"



function Navbar(item: INavbar) {

  const navigate = useNavigate()
  const fncLogout = () => {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    navigate('/')

  }
  const user = control()!.user[0].bilgiler

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">

        <NavLink className="navbar-brand" to='/products'>Home</NavLink>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/products'>Ürünler</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/orders'>Siparişler</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fa fa-user"></i> {user?.userName + " " + user?.userSurname}
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i className="fa fa-user-times"></i> Logout
                </a>
                <a role='button' href="#" className="dropdown-item" aria-expanded="false">
                  <i className="fa fa-cog"></i> Settings
                </a>
              </div>
            </li>
            
            <li className="nav-item">
              <NavLink to='/orders' className="nav-link">
                <i className="fa fa-shopping-cart"></i> Sepet
              </NavLink>
            </li>
          </ul>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">User Logout</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Are you sure logout!
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button data-bs-dismiss="modal" onClick={fncLogout} type="button" className="btn btn-danger">Logout</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>

                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

