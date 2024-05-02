import "../Navbar/Navbar.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    return (
        <nav>
            <div className="nav1">
                <div className="nav-elements">
                    <div className="bi bi-truck" />
                    <p>FREE SHIPPING WORLDWIDE</p>

                    <div className="dropdown">
                        <button className="dropdown-toggle" data-bs-toggle="dropdown" >Language</button>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="usa-img">
                                    <img src={getImageUrl("country/USA.jpg")} alt="USA-image" />
                                </div>
                                <a className="dropdown-item" type="button">United State</a>
                            </li>
                            <li><div className="gny-img"> <img src={getImageUrl('country/GNY.png')} alt="GNY-image" /> </div> <a className="dropdown-item" type="button">Germany</a></li>
                            <li><div className="ind-img"> </div> <a className="dropdown-item" type="button">India</a></li>
                        </ul>
                    </div>
                </div>
                <div className="nav-shiping">
                    <div>Shipping</div>
                    <div>FAQ</div>
                    <div>Contact </div>
                </div>
                <div className="nav-social">
                    <div><a href="#" className="bi bi-facebook"></a></div>
                    <div><a href="#" className="bi bi-twitter"></a></div>
                    <div><a href="#" className="bi bi-instagram"></a></div>
                    <div><a href="#" className="bi bi-youtube"></a></div>
                </div>
            </div>
            <div>
                <div>Shopper.</div>
            </div>
        </nav>
    )
}