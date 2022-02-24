import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col, Input } from "reactstrap";
import { bindActionCreators } from "redux";
import { FaAngleLeft } from "react-icons/fa";
import Layout from "../../layout";
class PlaceOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="bg-cyan-50 pt-5 mt-10 rounded-tl-full">
                    <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                        <div className="p-5">
                            <h3 className="font-bold text-xl text-[#1bbcd5]">Componentity</h3>
                        </div>
                        <div className="p-5">
                            <div className="text-sm uppercase text-[#1bbcd5] font-bold">Resources</div>
                            <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Support <span className="text-teal-600 text-xs p-1">New</span></a>
                        </div>
                        <div className="p-5">
                            <div className="text-sm uppercase text-[#1bbcd5] font-bold">Support</div>
                            <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
                        </div>
                        <div className="p-5">
                            <div className="text-sm uppercase text-[#1bbcd5] font-bold">Contact us</div>
                            <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@company.com <span className="text-teal-600 text-xs p-1"></span></a>
                        </div>
                    </div>
                </div>

                <div className="bg-cyan-50 pt-2">
                    <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
                        <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}



const mapStateToProps = (state) => {
    return { ...state };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch
    );

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PlaceOrder)
);