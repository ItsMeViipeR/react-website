import React, {Component} from "react";
import "../styles/Card.css";

interface Props {
    imageURL: string;
}

class Card extends Component<Props> {
    render() {
        return (
            <div className="card">
                <img src={this.props.imageURL} alt="Avatar" />

                <div className="container">
                    <p><b>John Doe</b></p>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        )
    }
}

export default Card;