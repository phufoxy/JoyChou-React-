import React, { Component } from 'react';
import { Link } from "react-router-dom";

class footer extends Component {
    render() {
        return (
            <footer className="b-page-footer b-footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                            <div className="b-logo"><img src="./images/partial/logo.png" alt="Logo" /></div>
                        </div>
                        <div className="col-lg-3">
                            <div className="b-content-footer">
                                <p className="b-text-norm">
                                    &copy; 2017 GOnJoy. All Rights Reserved

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="b-page-nav" id="top-header">
                                <ul className="b-list-item js-clone-nav d-lg-block">
                                    <li className="b-item">
                                        <Link className="b-link" to="user.html">NGƯỜI DÙNG</Link>
                                    </li>
                                    <li className="b-item">
                                        <Link className="b-link" to="bussiness.html">DOANH NGHIỆP</Link>
                                    </li>
                                    <li className="b-item">
                                        <Link className="b-link" to="bussiness.html">FAQ</Link>
                                    </li>
                                    <li className="b-item">
                                        <Link className="b-link" to="bussiness.html">VỀ CHÚNG TÔI</Link>
                                    </li>
                                    <li className="b-item">
                                        <Link className="b-link" to="bussiness.html">BLOCK</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2">
                            <nav className="b-page-nav">
                                <ul className="b-list-social">
                                    <li className="b-item">
                                        <Link className="b-link" to="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li className="b-item">
                                        <Link className="b-link" to="#">
                                            <i className="fab fa-youtube"></i>
                                        </Link>
                                    </li>
                                    <li className="b-item">
                                        <Link className="b-link" to="#">
                                            <i className="fab fa-google-plus-g"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default footer;