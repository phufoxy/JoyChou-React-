import React, { Component } from 'react';
import { Link } from "react-router-dom";

class navbar extends Component {
    render() {
        return (
            <header className="b-page-header b-bussiness" id="b-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                            <div className="b-logo"><Link className="b-link" to="/"><img src="./images/partial/logo.png" alt="Logo" /></Link></div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="b-page-nav">
                                <div className="b-open-menu d-lg-none"><Link className="site-menu-toggle js-menu-toggle" to="#"><i className="fas fa-bars"></i></Link></div>
                                <ul className="b-list-item js-clone-nav d-lg-block">
                                    <li className="b-item"> <Link className="b-link" to="/users">NGƯỜI DÙNG</Link>
                                    </li>
                                    <li className="b-item"><Link className="b-link" to="bussiness.html">DOANH NGHIỆP</Link>
                                    </li>
                                    <li className="b-item"><Link className="b-link" to="bussiness.html">FAQ</Link>
                                    </li>
                                    <li className="b-item"><Link className="b-link" to="bussiness.html">VỀ CHÚNG TÔI</Link>
                                    </li>
                                    <li className="b-item"><Link className="b-link" to="bussiness.html">BLOCK</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-5">
                            <div className="b-login js-clone-lang d-lg-block d-none">
                                <div className="b-item-lang"><Link className="b-link" to="#">ENGLISH</Link></div>
                                <div className="b-item"><Link className="b-link" to="#">ĐĂNG NHẬP</Link></div>
                                <div className="b-item is-active"><Link className="b-link" to="#">Đăng ký miễn phí</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default navbar;