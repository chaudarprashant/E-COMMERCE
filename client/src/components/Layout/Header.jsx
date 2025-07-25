import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
// import Search from "antd/es/input/Search";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import {Badge} from "antd"
import "./Header.css";
import logo from './logo.png';




const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid py-1 px-2">

         <div className="d-flex justify-content-between align-items-center w-100">

 <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="mobile-search-container d-md-none">
           <SearchInput />
         </div>
 
 
         </div>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
            {/* &nbsp;&nbsp;&nbsp;MegaMart */}

           {/* <img src={logo}  width="200"/> */}

            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">

              {/* <SearchInput/> */}
              <div className="search-container">
             <SearchInput />
             </div>
   
              <li className="nav-item">
                <NavLink to="/" className="nav-link mx-3">
                  Home
                </NavLink>
              </li>


              <li className="nav-item dropdown">
                <Link
                  className="nav-link mx-3 dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id} >
                      <Link
                        className=" dropdown-item mx-3"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                 <li className="nav-item mx-3">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item mx-3">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user' }`} className="dropdown-item">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li className="nav-item mx-3">
               <Badge count={cart?.length} showZero>
               <NavLink to="/cart" className="nav-link mx-3">
                 Cart🛒
                </NavLink>
               </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}; 

export default Header;  