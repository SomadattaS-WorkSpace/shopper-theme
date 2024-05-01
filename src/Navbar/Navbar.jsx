import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <div className="nav1">
                <div className="nav-elements">
                    <div className="bi bi-truck" />
                    <p>FREE SHIPPING WORLDWIDE</p>

                    <div class="dropdown">
                        <button class="dropdown-toggle" data-bs-toggle="dropdown" >Language</button>
                        <ul class="dropdown-menu">
                            <li><div className="country-img"/><a class="dropdown-item" type="button">United State</a></li>
                            <li><div className="country-img"/><a class="dropdown-item" type="button">Germany</a></li>
                            <li><div className="country-img"/><a class="dropdown-item" type="button">India</a></li>
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