import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="centered-stripe"></div>

    <footer className="footer">
 
        <div>
          <p className="footer-text">
            Made to be enjoyed by all.
          </p>
          <p  className="footer-text">
            FOLLOW US HERE THERE AND EVERYWHERE.
          </p>
          <p  className="footer-text">
            [SALES@NUEVASUNGLASSES.COM.AU]
          </p>
          <p  className="footer-text">
            ALL MAJOR PAYMENT METHODS AVAILABLE
          </p>
        </div>



        
        <div className="footer-links">
          <Link className="footer-link" to="/Cart">
          [ Cart ]
          </Link>
            <Link className="footer-link" to="/Shop">
              [ Shop ]
              </Link>
            <Link to="OurHistory" className="footer-link">
              [ OurHistory ]
            </Link>
            <Link to="/Journal" className="footer-link">
             [ Journal ]
            </Link>
        </div>

    </footer>
    </>
  );
}

export default Footer;
