import {Component} from "react";
import jQuery from 'jquery';

import "../styles/components/Navbar.css";

(function($) {
    $(function() {
        // Hamburger toggle
        $('#navbar-toggle').on('click', function() {
            $('nav ul').slideToggle();
            this.classList.toggle('active');
        });


        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').on("click", function(e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            // Close dropdown when select another dropdown
            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });


        // Click outside the dropdown will remove the dropdown class
        $('html').not(".navigation .nav-container nav ul li").on("click", () => $('.navbar-dropdown').hide());
    });
})(jQuery);

interface Props {
    name: string;
}

class Navbar extends Component<Props> {
    render() {
        return (
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <a href="#!">{this.props.name}</a>
                    </div>
                    <nav>
                        <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                        <ul className="nav-list">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About me</a>
                            </li>
                            <li>
                                <a href="/projects">My Projects</a>
                            </li>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}

export default Navbar;