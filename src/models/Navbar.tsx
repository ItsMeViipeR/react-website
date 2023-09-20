import {Component} from "react";

import "../styles/components/Navbar.css";

interface Props {
    name: string;
}

class Navbar extends Component<Props> {
    render() {
        return (
            <nav>
                <h1>{this.props.name}</h1>

                <div className="onglets">
                    <a href="#">Accueil</a>
                    <a href="#">A propos</a>
                    <a href="#">Articles</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;