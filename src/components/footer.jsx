import { FiFacebook, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import '@/scss/components/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <a
                href="https://maps.app.goo.gl/U5gtyfY5ttQ4BVuL6"
                target="_blank"
                className="footer__address"
            ><FiMapPin />Søbjergvej 4, Ringsted, Denmark</a>
            <ul className="footer__list">
                <li><a
                    href="https://www.facebook.com/profile.php?id=61576947046223&mibextid=wwXIfr&rdid=CEIX6FsHn2lR0VPg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RMaxHFKXS%2F%3Fmibextid%3DwwXIfr"
                    target="_blank"
                    className="footer__list-item"
                ><FiFacebook /></a></li>
                <li><a href="tel:+4593600783" className="footer__list-item"><FiPhone /></a></li>
                <li><a href="mailto:Coolgus@baretten.dk" className="footer__list-item"><FiMail /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;