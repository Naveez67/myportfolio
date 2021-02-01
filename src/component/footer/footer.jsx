import React from "react";
import "./footer.css";
const Footer = () => {
    return ( 
        <div>
            <hr />
        <div className="py-2 text-center footer-style">© NAVEEZ MUNIR &nbsp; {new Date().getFullYear()}</div>
      </div>
     );
}
 
export default Footer;