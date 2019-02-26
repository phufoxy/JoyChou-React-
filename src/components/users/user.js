import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
class user extends Component {
    render() {
        return (
            <div className='b-wrapper'>
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
                <header className="b-page-header b-bussiness" id="b-page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1">
                                <div className="b-logo">
                                    <Link className="b-link" to="index.html"><img src="./images/partial/logo.png" alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <nav className="b-page-nav">
                                    <div className="b-open-menu d-lg-none">
                                        <Link className="site-menu-toggle js-menu-toggle" to="#">
                                            <i className="fas fa-bars"></i>
                                        </Link>
                                    </div>
                                    <ul className="b-list-item js-clone-nav d-lg-block">
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
                                            <Link className="b-link" to="about.html">VỀ CHÚNG TÔI</Link>
                                        </li>
                                        <li className="b-item">
                                            <Link className="b-link" to="bussiness.html">BLOCK</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-5">
                                <div className="b-login js-clone-lang d-lg-block d-none">
                                    <div className="b-item-lang">
                                        <Link className="b-link" to="#">ENGLISH</Link>
                                    </div>
                                    <div className="b-item">
                                        <Link className="b-link" to="#">ĐĂNG NHẬP</Link>
                                    </div>
                                    <div className="b-item is-active">
                                        <Link className="b-link" to="#">Đăng ký miễn phí</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="b-page-hero b-users">
                    <div className="container">
                        <div className="b-content">
                            <h3 className="b-text-title">Trợ lý Ảo đột phá</h3>
                            <p className="b-text-norm">
                                Người trợ lý với lời khuyên ẩm thực chất lừ cho bạn. Inbox ngay Gonhhoy trên
                                Facebook Messager</p>
                        </div>
                        <Link className="b-btn-messeger" to="#">Messager</Link>
                        <div className="b-images"><img src="./images/home/top-banner-item.png" alt="Bussiness" /></div>
                        <div className="b-scroll-bottom" id="top-menu">
                            <a className="b-link" href="#function">CUỘN XUỐNG</a>
                        </div>
                    </div>
                </section>
                <section className="b-page-help">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="b-heading text-center">
                                    <p className="b-text-norm">NỔI BẬT CỦA JOY</p>
                                    <h3 className="b-text-title">Joy giúp gì cho bạn ?</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="b-card wow bounceInDown"
                            data-wow-delay=".5s"
                            data-wow-duration="1s">
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/Tim_Dung_Dia_Diem.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">TÌm Đúng Địa Điểm</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/De_Xuat_Mon_An.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">Đề xuất món ăn</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/Tiet_Kiem_Thoi_GIan.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">Tiết kiệm thời gian</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/Tiet_Kiem_Chi_Phi.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">Tiết Kiệm Chi Phí</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/Tim_Theo_Cam_Xuc.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">Tìm Theo Cảm Xúc</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/Tim_Dung_Dia_Diem.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">TÌm Đúng Địa Điểm</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/De_Xuat_Mon_An.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">Đề xuất món ăn</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/Tiet_Kiem_Thoi_GIan.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">Tiết kiệm thời gian</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/Tiet_Kiem_Chi_Phi.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">Tiết Kiệm Chi Phí</p>
                                </div>
                            </div>
                            <div className="b-card-item">
                                <div className="b-icon"><img src="./images/home/Tim_Theo_Cam_Xuc.svg" alt="Icon" />
                                </div>
                                <div className="b-content">
                                    <p className="b-text-norm">Tìm Theo Cảm Xúc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="b-page-function" id="function">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7">
                                <div
                                    className="b-images wow bounceInLeft"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/home/block-1.png" alt="Table" width="100%" /></div>
                            </div>
                            <div className="col-lg-5">
                                <div className="b-function">
                                    <div
                                        className="b-content wow bounceInRight"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h3 className="b-text-title">Gợi Ý Sức Khỏe</h3>
                                        <p className="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="b-function">
                                    <div
                                        className="b-content wow bounceInLeft"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h3 className="b-text-title">Chơi game góp ý</h3>
                                        <p className="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem elementum in.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div
                                    className="b-images wow bounceInRight"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/home/block-2.png" alt="Table" width="100%" /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div
                                    className="b-images wow bounceInLeft"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/home/block-3.png" alt="Table" width="100%" /></div>
                            </div>
                            <div className="col-lg-5">
                                <div className="b-function">
                                    <div
                                        className="b-content wow bounceInRight"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h3 className="b-text-title">Hệ thống phân tích ngôn ngữ</h3>
                                        <p className="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem elementum in.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="b-function">
                                    <div
                                        className="b-content wow bounceInLeft"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h3 className="b-text-title">Cá Nhân hóa</h3>
                                        <p className="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem elementum in.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div
                                    className="b-images wow bounceInRight"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/home/block-4.png" alt="Table" width="100%" /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div
                                    className="b-images wow bounceInLeft"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/business/block-5.png" alt="Table" width="100%" /></div>
                            </div>
                            <div className="col-lg-5">
                                <div className="b-function">
                                    <div
                                        className="b-content wow bounceInRight"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h5 className="b-text-function">Tính năng</h5>
                                        <h3 className="b-text-title">Quản lý nhân viên</h3>
                                        <p className="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem elementum in.

                                        </p>
                                        <div className="b-list-function">
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Phân quyền nhân viên của quán</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Truy cập dữ liệu hoạt động của nhân viên</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="b-page-service">
                    <div className="b-content">
                        <h3
                            className="b-text-title wow bounceInUp"
                            data-wow-delay=".5s"
                            data-wow-duration="1s">Hãy để joy phục vụ bạn ngay bây giờ !</h3>
                        <Link className="b-btn-messeger" to="#">Messenger</Link>
                    </div>
                </section>
                <section className="b-page-business">
                    <div
                        className="b-images wow bounceInRight"
                        data-wow-delay=".5s"
                        data-wow-duration="1s"><img src="./images/home/bottom-banner-item.png" alt="Banner" width="100%" /></div>
                    <div className="b-content">
                        <h3 className="b-text-title">Joy và Doanh nghiệp</h3>
                        <p className="b-text-norm">Kết nối khách hàng của bạn 24/7 Hổ trợ việc kinh doanh của bạn 24/7</p>
                        <Link className="b-link" to="#">Khám phá các lợi ích</Link>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default user;