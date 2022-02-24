import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col, Input } from "reactstrap";
import { bindActionCreators } from "redux";
import Layout from "../../layout";

class PlaceOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('his', this.props);
    return (
      <React.Fragment>
        <Layout>
          <div className="mx-auto mt-10 max-w-7xl px-4">
          {/* <div className="jss1796"></div> */}
            <div className="flex items-center justify-between">
              <div className="text-5xl font-extrabold text-[#1bbcd5]">Item Market</div>
              <div className="hidden md:block">
                <input class="w-96 shadow rounded-full appearance-none border-[2px] border-[#1bbcd5] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search for the game"></input>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between rounded-xl bg-[#b5e2ec] p-2">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-gray-700">
                  Newest Collections
                </div>
              </div>
              <div class="hidden w-64 md:relative md:inline-block">
                <div class="relative">
                  <select class="block appearance-none w-full border-[1px] border-[#1bbcd5] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none">
                    <option>Filter</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8" />
          </div>
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:gap-y-14 xl:grid-cols-3">
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-t-xl rounded-bl-xl rounded-br-[64px] border-[3px] border-[#b5e2ec] bg-white p-2 pb-3"
                onClick={() => {
                  this.props.history.push("/items")
                }}
              >
                <div className="overflow-hidden rounded-md">
                  <img src={require("../../assets/banner.png")} />
                </div>
                <div className="relative mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xl font-extrabold">Kittens meow</p>
                    <p className="text-sm font-bold text-gray-600">
                      40 Items on sale
                    </p>
                  </div>
                  <div className="mr-24 mb-2 flex items-end justify-between">
                    <div className="absolute top-[-44px] right-0 w-24 overflow-hidden rounded-full border-4 border-white">
                      <img src={require("../../assets/avatar.png")} className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
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