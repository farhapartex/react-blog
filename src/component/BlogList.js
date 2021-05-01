import React, { Component } from "react"
import SingleBlogBox from "./SingleBlogBox"

class BlogList extends Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="blog-list mx-auto pb-5">
                        <SingleBlogBox></SingleBlogBox>
                        <SingleBlogBox></SingleBlogBox>
                        <SingleBlogBox></SingleBlogBox>
                        <SingleBlogBox></SingleBlogBox>
                        <SingleBlogBox></SingleBlogBox>
                        <SingleBlogBox></SingleBlogBox>
                        <SingleBlogBox></SingleBlogBox>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogList