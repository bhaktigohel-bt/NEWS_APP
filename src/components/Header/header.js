import React from 'react';
import logo from '../../logo.svg';
import { Tabs, Tab } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './headerActions';
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'Everything',
        }
    }

    HandleRoute(path) {
        this.setState({ route: path });
        // this.props.baseActions.actions.setpath(path);
        this.props.history.push(path);
    }

    render() {
        let { route } = this.state;
        console.log('props', this.props)
        return ( <
            div className = "App-header" >
            <
            img src = { logo }
            sizes = { 100 }
            className = "App-logo "
            alt = "logo" / >
            <
            div >
            <
            Tabs id = "controlled-tab-example"
            activeKey = { route }
            onSelect = { k => this.HandleRoute(k) } >
            <
            Tab eventKey = "Everything"
            title = "EveryThing" >
            EveryThing <
            /Tab> <
            Tab eventKey = "TopHeadlines"
            title = "Top-Head-Lines" >
            Top - Head - Lines <
            /Tab> <
            Tab eventKey = "Sources"
            title = "Sources" >
            Sources <
            /Tab> < /
            Tabs > < /

            div > < /
            div >

        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        route: state.header.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        baseActions: bindActionCreators({
            actions
        }, dispatch),
    }
};

Header = withRouter(Header);
Header = connect(mapStateToProps, mapDispatchToProps)(Header)
export { Header };