import React from 'react';
import { Header } from '../Header';
import { bindActionCreators } from 'redux';
import * as actions from './dashBoardActions';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
class DashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            error: '',
            route: "",
            loader: false,
            articleData: []
        }
    }

    // this can be used when performance is a bottleneck.
    shouldComponentUpdate(nextProps) {
        if (this.state.route !== nextProps.route) {
            this.props.newsApi(nextProps.route);
        }
        return true;
    }


    componentWillReceiveProps(nextProps) {

        this.setState({
            route: nextProps.route,
            articleData: nextProps.articleData,
            loader: nextProps.loader,
            error: nextProps.error
        });
    }

    componentDidMount() {
        this.props.newsApi('everything');
    }

    render() {
        let { articleData, loader, error } = this.state;

        return ( <
            div >
            <
            Header / > {
                articleData &&
                articleData.map((article) => {
                    return ( <
                        p key = { article.url } > { article.description } < /p>
                    )
                })
            }

            {
                loader &&
                    <
                    Spinner animation = "border"
                role = "status" / >
            } {
                error !== '' &&
                    <
                    div > { error } < /div>
            } <
            /
            div >
        )
    }
}

function mapStateToProps(state) {

    return {
        route: state.headerReducer.route,
        articleData: state.dashboardReducer.articleData,
        loader: state.dashboardReducer.loader,
        error: state.dashboardReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators({...actions }, dispatch) }

}

DashBoard = connect(mapStateToProps, mapDispatchToProps)(DashBoard);

export { DashBoard };