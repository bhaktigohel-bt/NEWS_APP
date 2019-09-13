import React from 'react';
import { Header } from '../Header';
import { bindActionCreators } from 'redux';
import * as actions from './dashBoardActions';
import { connect } from 'react-redux';
class DashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            route: "",
            articleData: []
        }
    }

    // this can be used when performance is a bottleneck.
    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate', nextProps.articleData);
        if (this.state.route !== nextProps.route) {
            this.props.newsApi(nextProps.route);
        }
        return true;
    }


    componentWillReceiveProps(nextProps) {
        console.log('componentWillUpdate', nextProps.articleData);
        this.setState({
            route: nextProps.route,
            articleData: nextProps.articleData
        });
    }

    render() {
        let { articleData, route } = this.state;
        console.log(articleData);
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
            } <
            /div>
        )
    }
}

function mapStateToProps(state) {
    console.log('11111111111111', state.dashboardReducer.articleData);
    return {
        route: state.headerReducer.route,
        articleData: state.dashboardReducer.articleData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators({...actions }, dispatch) }

}

DashBoard = connect(mapStateToProps, mapDispatchToProps)(DashBoard);

export { DashBoard };