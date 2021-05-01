import React, { Component } from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

class BlogDetail extends Component {
    constructor(props) {
        super(props);
        this.headerImage = require('../assets/images/covid-image.jpg')
        console.log(this.headerImage)
    }


    render() {
        return (
            <div className="w-100">
                <NavBar></NavBar>
                <div className="mx-auto mt-3 pt-3 pb-3 blog-details">
                    <div className="w-100">
                        <img src={this.headerImage.default} className="headerImage mx-auto" />
                    </div>
                    <h1 className="title text-center mt-5"><b>India COVID death toll tops 200,000 as essential supplies run out</b></h1>

                    <div className="blog-content mt-5">
                        <p>India’s death toll from COVID-19 has crossed the grim milestone of 200,000 as the country continued to face shortages of hospital beds, medical oxygen and other essential supplies.</p>
                        <p>A calamitous second wave of the coronavirus has seen at least 300,000 people test positive each day for the past seven days, overwhelming health facilities and crematoriums and prompting an increasingly urgent response from allies overseas sending equipment.</p>
                        <p>
                            The health ministry on Wednesday recorded 360,960 new cases in the previous 24 hours, for the world’s largest single-day total, taking India’s tally of infections to nearly 18 million. It was also the deadliest day so far, with 3,293 fatalities carrying the toll to 201,187. Ten states in the world’s second-most populous country account for 74 percent of cases, including the worst-hit areas of Maharashtra and New Delhi which are under lockdown, Infections have overburdened healthcare systems and funeral sites.
                        </p>
                        <p>
                            The health ministry on Wednesday recorded 360,960 new cases in the previous 24 hours, for the world’s largest single-day total, taking India’s tally of infections to nearly 18 million. It was also the deadliest day so far, with 3,293 fatalities carrying the toll to 201,187. Ten states in the world’s second-most populous country account for 74 percent of cases, including the worst-hit areas of Maharashtra and New Delhi which are under lockdown, Infections have overburdened healthcare systems and funeral sites.
                        </p>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default BlogDetail