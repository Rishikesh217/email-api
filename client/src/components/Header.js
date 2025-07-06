import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import StripePayment from "./StripePayment";

class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null :
                return 'Still deciding';
            case false :
                return <li key="1"><a href="/auth/google">Login with Google</a></li>;
            default :
                return [ <li key="1"><StripePayment/></li>,
                   <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                <li key="2"><a href="/api/logout">Logout</a></li>];
        }
    }

    render() {
        console.log(this.props)
        return (
           <nav>
                <div className="nav-wrapper">
                    <Link className="left brand-logo"
                        to={ this.props.auth ? '/surveys':'/'}>
                        Email-Boi
                    </Link>
                    <ul className="right">
                        { this.renderContent() }
                    </ul>
                </div>
           </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth,
    }
}

export default connect(mapStateToProps)(Header);