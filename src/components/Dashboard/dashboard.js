import React from 'react';
import { Header } from '../Header';
import { withRouter } from 'react-router-dom';
class DashBoard extends React.Component {

    render() {
        return ( <
            div >
            <
            Header / >
            Your content here. <
            /div>
        )
    }
}
DashBoard = withRouter(DashBoard);
export { DashBoard };