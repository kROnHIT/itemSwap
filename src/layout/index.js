import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Header from "./header";
import TopHeader from "./header/topHeader";
import Footer from "./footer";

class ProductLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <TopHeader/>
                <Header/>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { ...state };
};
const mapActionToProps = {}

export default withRouter(connect(
    mapStateToProps,
    mapActionToProps
)(ProductLayout));
