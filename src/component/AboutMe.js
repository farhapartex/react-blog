import React, { Component } from "react"
import NavBar from "./NavBar"

class AboutMe extends Component {

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="w-75 mx-auto pt-2 pb-3 about-me">
                    <h1 className="title text-center mt-5"><b>About Me</b></h1>
                    <div className="w-75 mx-auto mt-5">
                        <p>Hi, I am Md. Nazmul Hasan. I consider myself as Pythonista and love to program in Python. I also like JavaScript.</p>
                        <p>This is my personal blog site where I will share my thought in various topics.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe