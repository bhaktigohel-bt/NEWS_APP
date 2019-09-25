import React from 'react';
// import logo from '../../logo.svg';
import { Field, reduxForm } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './headerActions';
import { inputField, selectField } from '../Form';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            route: 'everything',
        }
    }

    HandleRoute(path) {
        console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', path)
        this.props.setpath(path);
    }

    handleSubmit(){
        console.log('submitting');
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            route: nextProps.route
        });
    }

    render() {
        let { route } = this.state;
        console.log(route);
        return (
            <div className="App-header">
                {/* <img src={logo} sizes={100} className="App-logo " alt="logo" /> */}
                <Tabs id="controlled-tab-example" activeKey={route} onSelect={k => this.HandleRoute(k)} >
                    <Tab eventKey="everything" title="EveryThing" > </Tab>
                    <Tab eventKey="top-headlines" title="Top-Head-Lines" > </Tab>
                    <Tab eventKey="sources" title="Sources" >  </Tab>
                </Tabs>
                <div>
                    <FieldLevelValidationForm handleSubmit = {this.handleSubmit} route={route} />
                </div>
            </div>
        )
    }
}

let FieldLevelValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, route } = props;
    console.log(route);
    return (
            <form onSubmit={handleSubmit}>
                <Field name="q" type="text" component={inputField} label="related with"/>
                <Field name="domains" type="text" component={inputField} label="website"/>
                <Field name="pagesize" type="text" component={inputField} label="page size"/>
                <Field name="page" type="text" component={inputField} label="page"/>
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
    )}

FieldLevelValidationForm = (reduxForm({
    form: 'searchForm',
})(FieldLevelValidationForm));

function mapStateToProps(state) {
    return {
        route: state.headerReducer.route,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { ...bindActionCreators({ ...actions }, dispatch) }

}

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export { Header };