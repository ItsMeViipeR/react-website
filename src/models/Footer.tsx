import {Component} from "react";
import "../styles/components/Footer.css"

interface Props {
    name: string;
}

class Footer extends Component<Props> {
    render() {
        return (
            <div>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name">{this.props.name}</span>
                        </div>
                        <div className="media-icons">
                            <a href="#"><i className="fab fa-discord"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Website map</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About me</a></li>
                            <li><a href="#">My projects</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><a href="#">Web conception</a></li>
                            <li><a href="#">Desktop app creation</a></li>
                            <li><a href="#">Code review</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Help by me</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Rust</a></li>
                            <li><a href="#">C#</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2021 <a href="#">{this.props.name}.</a>All rights reserved</span>
                        <span className="policy_terms">
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms & condition</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;