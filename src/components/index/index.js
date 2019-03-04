import React, { Component } from 'react';
import { Link } from "react-router-dom";

class index extends Component {
    render() {
        return (
            <div className="b-wrapper">
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close">
                            <span className="icon-close2 js-menu-toggle">
                                <i className="fas fa-window-close"></i>
                            </span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                    <div className="site-mobile-menu-lang"></div>
                </div>
                <header className="b-page-header b-index" id="b-page-header">
                    <div className="container">
                        <div className="b-header-top d-lg-block d-none">
                            <div className="b-item-lang">
                                <Link className="b-link" to="/">ENGLISH</Link>
                            </div>
                        </div>
                        <div className="b-header-bottom">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="b-header-left">
                                        <div className="b-logo">
                                            <Link className="b-link" to="/"><img src="./images/partial/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <nav className="b-page-nav">
                                            <div className="b-open-menu d-lg-none">
                                                <Link className="site-menu-toggle js-menu-toggle" to="#">
                                                    <i className="fas fa-bars"></i>
                                                </Link>
                                            </div>
                                            <ul className="b-list-item js-clone-nav d-lg-block d-none">
                                                <li className="b-item">
                                                    <Link className="b-link" to="/users">NGƯỜI DÙNG</Link>
                                                </li>
                                                <li className="b-item">
                                                    <Link className="b-link" to="/business">DOANH NGHIỆP</Link>
                                                </li>
                                                <li className="b-item">
                                                    <Link className="b-link" to="bussiness.html">FAQ</Link>
                                                </li>
                                                <li className="b-item">
                                                    <Link className="b-link" to="/about">VỀ CHÚNG TÔI</Link>
                                                </li>
                                                <li className="b-item">
                                                    <Link className="b-link" to="bussiness.html">BLOCK</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="b-header-right">
                                        <div className="b-login js-clone-lang d-lg-block d-none">
                                            <div className="b-item">
                                                <Link className="b-link" to="signin.html">ĐĂNG NHẬP</Link>
                                            </div>
                                            <div className="b-item">
                                                <Link className="b-link b-register" to="#">Đăng ký miễn phí</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="b-page-main b-page-index">
                    <div className="b-main-content">
                        <div
                            className="b-overate wow fadeInDown"
                            data-wow-delay="1s"
                            data-wow-duration="1s">
                            <div className="b-content">
                                <h3 className="b-text-title">Trợ lý Ảo đột phá</h3>
                                <p className="b-text-norm">

                                    Người trở lý với lời khuyên ẩm thực chất lừ cho bán. Indox ngày Gomjou trên
                                    Facenook Messenger.

                                </p>
                                <div className="b-btn-find">
                                    <Link className="b-link b-ripple" to="#">TÌM HIỂU NGAY</Link>
                                </div>
                            </div>
                            <div className="b-images"><img src="./images/index/img-1.png" alt="Img" /></div>
                        </div>
                        <div
                            className="b-enterprise wow fadeInDown"
                            data-wow-delay="1s"
                            data-wow-duration="1s">
                            <div className="b-content">
                                <h3 className="b-text-title">Joy và Doanh Nghiệp</h3>
                                <p className="b-text-norm">

                                    Kết nối khách hàng của bản 24/7 Hổ trọ việc kinh doanh của bán 24/7

                                </p>
                                <div className="b-btn-find">
                                    <Link className="b-link b-ripple" to="#">TÌM HIỂ NGAY</Link>
                                </div>
                            </div>
                            <div className="b-images"><img src="./images/index/img-2.png" alt="Img" /></div>
                        </div>
                    </div>
                </section>
                <footer className="b-page-footer b-index" id="b-footer">
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
                                <nav className="b-page-nav">
                                    <ul className="b-list-item">
                                        <li className="b-item">
                                            <Link className="b-link" to="#">NGƯỜI DÙNG</Link>
                                        </li>
                                        <li className="b-item">
                                            <Link className="b-link" to="#">DOANH NGHIỆP</Link>
                                        </li>
                                        <li className="b-item">
                                            <Link className="b-link" to="#">FAQ</Link>
                                        </li>
                                        <li className="b-item">
                                            <Link className="b-link" to="#">VỀ CHÚNG TÔI</Link>
                                        </li>
                                        <li className="b-item">
                                            <Link className="b-link" to="#">BLOCK</Link>
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
            </div>
        );
    }
}

export default index;