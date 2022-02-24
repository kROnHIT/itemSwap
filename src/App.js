import React, { Component, Suspense, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
const Market = React.lazy(() => import('./views/market'))
const Items = React.lazy(() => import('./views/items'))
const ItemDetail = React.lazy(() => import('./views/itemDetail'))

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Suspense fallback={<div className="loading" />}>
                    <Router>
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={(props) => <Market {...props} />}
                            />
                            <Route
                                path="/items"
                                exact
                                render={(props) => <Items {...props} />}
                            />
                            <Route
                                path="/itemDetail"
                                exact
                                render={(props) => <ItemDetail {...props} />}
                            />
                            <Redirect to="/error" />
                        </Switch>
                    </Router>
                </Suspense>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
        },
        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(App)
