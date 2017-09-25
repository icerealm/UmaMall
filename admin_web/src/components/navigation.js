import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavTop } from './helpers';
import * as Lang from '../lang/th-lang';



class Navigation extends Component {
    render() {
        const { pathname } = this.props.location;
        let productTypePattern = new RegExp('producttype');
        let productPattern = new RegExp('product($|[^type]).*');
        return (
                <NavTop className='navbar navbar-expand-sm navbar-light' bgcolor='rgb(229,153,178)'>
                    <span className="navbar-brand">LOGO</span>
                    <span className="navbar-toggler" type="none" 
                                                    data-toggle="collapse" 
                                                    data-target="#navbarMenu" 
                                                    aria-controls="navbarMenu" 
                                                    aria-expanded="false" aria-label="Toggle navigation">
                        &#9776;
                    </span>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <div className="navbar-nav">
                            <Link to="/" className={`nav-item nav-link ${pathname=='/' ? 'active': ''}`} >
                                {Lang.lable_home}
                            </Link>
                            <Link to="/producttype" 
                                  className={`nav-item nav-link ${productTypePattern.test(pathname) ? 'active': ''}`} >
                                {Lang.lable_product_type}
                            </Link>
                            <Link to="/product" className={`nav-item nav-link ${productPattern.test(pathname) ? 'active': ''}`} >
                                {Lang.lable_product}
                            </Link>
                            <Link to="/stock" className={`nav-item nav-link ${pathname=='/stock' ? 'active': ''}`} >
                                {Lang.lable_stock}
                            </Link>
                        </div>
                    </div>
                </NavTop>
        );
    }
}

export default withRouter(Navigation)