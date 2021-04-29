import React, { Component } from "react"
import { Link } from "react-router-dom"

class SingleBlogBox extends Component {
    render() {
        return (
            <div className="w-100 single-blog-box pt-3 pb-3">
                <h3><Link to="/detail"><b>India COVID death toll tops 200,000 as essential supplies run out</b></Link></h3>
                <div className="w-100"><span>February 2021</span> <span className="ml-2"><b>AWS</b></span></div>
                <div className="w-100 mt-2">
                    <p>India’s death toll from COVID-19 has crossed the grim milestone of 200,000 as the country continued to face shortages of hospital beds, medical oxygen and other essential supplies.</p>
                </div>
                <Link to="/detail">Read</Link>
            </div>
        )
    }
}

export default SingleBlogBox