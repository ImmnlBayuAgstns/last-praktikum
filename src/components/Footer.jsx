import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <section className="secTop">
                <p>Get Connected with us on social media:</p>
                <div className="socialMedia">
                    <InstagramIcon /> <XIcon /> <FacebookIcon /> <LinkedInIcon />
                </div>
            </section>
            <div className="copyright">
                <p>&copy;2024 Copyright: Immanuel</p>
            </div>
        </div>
    );
}

export default Footer;
