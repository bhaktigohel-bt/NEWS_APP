import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from './Services/Store';
import { DashBoard } from './components';
class Routers extends React.Component {
    render() {
        return ( <
            div >
            <
            Provider store = { store } >
            <
            Router >
            <
            Route path = "/"
            component = { DashBoard }
            exec /
            >
            <
            Route path = "/Sources"
            component = { DashBoard }
            /> <
            Route path = "/TopHeadlines"
            component = { DashBoard }
            />< /
            Router > <
            /Provider>< /div >
        )
    }
}

export { Routers };