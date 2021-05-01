import React, { Component } from "react"
import NavBar from "./NavBar"
import BlogList from "./BlogList"
import Footer from "./Footer"

class BlogHome extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <BlogList></BlogList>
                <Footer></Footer>
            </div>
        )
    }
}

export default BlogHome