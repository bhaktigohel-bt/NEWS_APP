import React from 'react';
import logo from '../../logo.svg';
import { Tabs, Tab } from 'react-bootstrap';
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
        this.props.setpath(path);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            route: nextProps.route
        });
    }

    render() {
        let { route } = this.state;
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
            Tab eventKey = "top-headlines"
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


function mapStateToProps(state) {
    return {
        route: state.headerReducer.route,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators({...actions }, dispatch) }

}

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export { Header };