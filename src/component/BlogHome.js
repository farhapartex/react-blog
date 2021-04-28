import React, { Component } from "react"
import NavBar from "./NavBar"
import BlogList from "./BlogList"

class BlogHome extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <BlogList></BlogList>
            </div>
        )
    }
}

export default BlogHome