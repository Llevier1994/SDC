import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDown } from "react-icons/fa";
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NewNavbar = () => {
  return (
    <>
        <div className="navbar">
              <div className="top">
                 <a href="" className="top-link">
                   Store Finder
                 </a>
                 <a href="" className="top-link">
                   Truck & Tool Rental
                 </a>
                 <a href="" className="top-link">
                   For The Pro
                 </a>
                 <a href="" className="top-link">
                   Gift Cards
                   </a>
                 <a href="" className="top-link">
                   Credit Services
                 </a>
                 <a href="" className="top-link">
                  Track Order
                  </a>
                 <a href="" className="top-link">
                  Help
                 </a>
             </div>
             <div className="mid">
           <div className="mid-left">
            <div className="shopping">
              <div className="shopping-icon">
                <img src={"/pics/logo.png"} width="65" height="65" />
              </div>
              <div>
                <p>You're shopping</p>
                <p className="wichita">
                  <strong>E Wichita</strong>
                  <FaAngleDown
                    className="dropdown-icon"
                    style={{ fontSize: "25px" }}
                  />
                </p>
                <p className="text-color">
                  <strong>OPEN</strong> until 10 pm
                </p>
              </div>
            </div>
            <div className="delivery">
              <p>
                Delivering to <strong className="zipcode">67220</strong>
                <FaAngleDown
                  className="dropdown-icon"
                  style={{ fontSize: "25px" }}
                />
              </p>
            </div>
          </div>
          <div className="mid-center">
            <input
              type="search"
              placeholder="What can we help you find today?"
              className="search-input"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              style={{ fontSize: "40px" }}
            />
          </div>
          <div className="mid-right">
            <div>
              {/* <Link>My Account</Link> */}
              <a href="">My Account</a>
            </div>
            <FontAwesomeIcon
              icon={faUser}
              className="profile-icon"
              style={{ fontSize: "25px" }}
            />
            <div>
              {/* <Link>Lists</Link> */}
              <a href="">Lists</a>
            </div>
            <FontAwesomeIcon
              icon={faHeart}
              className="love-icon"
              style={{ fontSize: "25px" }}
            />
            <div className="cart">
              {/* <Link>Cart</Link> */}
              <a href="">Cart</a>
              <div>0 items</div>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="cart-icon"
                style={{ fontSize: "25px" }}
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <a href="" className="bottom-link">
            All Departments
          </a>
          <a href="" className="bottom-link">
            Home Decor, Furniture & Kitchenware
          </a>
          <a href="" className="bottom-link">
            DIY Projects & Ideas
          </a>
          <a href="" className="bottom-link">
            Project Calculatus
          </a>
          <a href="" className="bottom-link">
            Installation & Services
          </a>
          <a href="" className="bottom-link">
            Special & Offers
          </a>
          <a href="" className="bottom-link">
            Local Ad & Catalog
          </a>
         </div>
      </div>
      <footer>
        
      </footer>
    </>
  );
};

export default NewNavbar;
