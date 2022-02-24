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
        <Layout>
          <div className="mx-auto max-w-7xl mt-4">
            <div className="mb-6 flex items-center justify-start text-xl font-extrabold cursor-pointer text-[#1bbcd5]"
              onClick={() => {
                this.props.history.push("/")
              }}
            >
              <FaAngleLeft size={24} className="mt-[1px]" />
              Back to market
            </div>
          </div>
          <div className="mx-auto max-w-7xl bg-cyan-50 p-6 rounded-xl">
            <div className="justify-between  sm:flex">
              <div className="mt-10 flex-col items-center justify-between md:flex">
                <div className='max-w-xl'>
                  <p className="mb-2 text-xl font-extrabold text-cyan-500">Kittens Meow</p>
                  <p className=" mb-6 text-3xl font-extrabold text-gray-700">Sounded HiFiver</p>
                  <p className="mb-6 font-semibold text-sm text-gray-600">
                    3888 Lil Bulls living on The Binance Smart Chain - By The Bull
                    Society Lil Bulls living on The Binance Smart Chain - By The Bull
                    Society
                  </p>
                  <div className='flex flex-row justify-between items-center'>
                    <div>
                      <p className="font-bold text-slate-600">Price</p>
                      <div className="justify-left mb-6 flex items-center">
                        <img
                          src={require("../../assets/bnb.png")}
                          className="mr-1 w-7 px-0.5"
                        />
                        <p className="mr-3 text-3xl mt-0 font-bold text-gray-800">0.6</p>
                        <p className="font-bold mt-0 text-slate-500">($246.55)</p>
                      </div>
                    </div>
                    <button className="rounded-xl bg-cyan-400 px-8 py-2 shadow-md transition hover:bg-cyan-300 hover:shadow-lg active:bg-cyan-500 active:shadow">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div className="shrink-0 overflow-hidden rounded-3xl h-80">
                <img src={require("../../assets/avatar.png")} className="w-80" />
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl items-center rounded-xl mt-6 justify-center bg-cyan-200 p-3 md:justify-between">
            <div>
              <input class="w-96 shadow rounded-full appearance-none border-[2px] border-[#1bbcd5] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search for the game"></input>
            </div>
            <div className="flex items-center justify-between">
              <p className="underline-cyan-500 mr-5 text-gray-700 border-b-4 border-b-cyan-400 text-xl font-bold leading-10">
                Items
              </p>
            </div>
            <div className="hidden w-64 md:relative md:inline-block">
              <select class="block appearance-none w-full border-[1px] border-[#1bbcd5] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none">
                <option>Filter</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              <div className="group rounded-xl border-2 bg-cyan-50 p-2 transition duration-200 hover:shadow-xl">
                <div className=" overflow-hidden rounded-xl border-4 border-white">
                  <img
                    src={require("../../assets/bull.png")}
                    alt="Bull"
                    className=" object-cover group-hover:opacity-80 group-hover:transition"
                  />
                </div>
                <div className="my-2 ">
                  <p className="mb-1 text-[10px] font-bold text-gray-500">
                    Into the HIFI-Verse
                  </p>
                  <p className="text-lg font-bold text-gray-700">Sounded HiFiver</p>
                </div>
                <div className="bo mb-1 border-b-[1px]"></div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-slate-400 md:text-xs">
                    Asking price
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="px-1 text-sm font-bold text-slate-400 md:text-xs">
                      ($56.54)
                    </p>
                    <img
                      src={require("../../assets/bnb.png")}
                      className="w-5 px-0.5"
                    />
                    <p className="md:text-md px-1 text-sm font-bold text-slate-700">
                      0.148
                    </p>
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