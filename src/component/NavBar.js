import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Hasan's Blog</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-me" className="nav-link">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-me" className="nav-link">Subscribe</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar