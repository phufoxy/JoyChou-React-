import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
class user extends Component {
    render() {
        return (
            <div className='b-wrapper'>
                <div class="site-mobile-menu">
                    <div class="site-mobile-menu-header">
                        <div class="site-mobile-menu-close">
                            <span class="icon-close2 js-menu-toggle">
                                <i class="fas fa-window-close"></i>
                            </span>
                        </div>
                    </div>
                    <div class="site-mobile-menu-body"></div>
                    <div class="site-mobile-menu-lang"></div>
                </div>
                <header class="b-page-header b-bussiness" id="b-page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-1">
                                <div class="b-logo">
                                    <Link class="b-link" to="index.html"><img src="./images/partial/logo.png" alt="Logo" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <nav class="b-page-nav">
                                    <div class="b-open-menu d-lg-none">
                                        <Link class="site-menu-toggle js-menu-toggle" to="#">
                                            <i class="fas fa-bars"></i>
                                        </Link>
                                    </div>
                                    <ul class="b-list-item js-clone-nav d-lg-block">
                                        <li class="b-item">
                                            <Link class="b-link" to="/users">NGƯỜI DÙNG</Link>
                                        </li>
                                        <li class="b-item">
                                            <Link class="b-link" to="bussiness.html">DOANH NGHIỆP</Link>
                                        </li>
                                        <li class="b-item">
                                            <Link class="b-link" to="bussiness.html">FAQ</Link>
                                        </li>
                                        <li class="b-item">
                                            <Link class="b-link" to="about.html">VỀ CHÚNG TÔI</Link>
                                        </li>
                                        <li class="b-item">
                                            <Link class="b-link" to="bussiness.html">BLOCK</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-lg-5">
                                <div class="b-login js-clone-lang d-lg-block d-none">
                                    <div class="b-item-lang">
                                        <Link class="b-link" to="#">ENGLISH</Link>
                                    </div>
                                    <div class="b-item">
                                        <Link class="b-link" to="#">ĐĂNG NHẬP</Link>
                                    </div>
                                    <div class="b-item is-active">
                                        <Link class="b-link" to="#">Đăng ký miễn phí</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="b-page-hero b-users">
                    <div class="container">
                        <div class="b-content">
                            <h3 class="b-text-title">Trợ lý Ảo đột phá</h3>
                            <p class="b-text-norm">
                                Người trợ lý với lời khuyên ẩm thực chất lừ cho bạn. Inbox ngay Gonhhoy trên
                                Facebook Messager</p>
                        </div>
                        <Link class="b-btn-messeger" to="#">Messager</Link>
                        <div class="b-images"><img src="./images/home/top-banner-item.png" alt="Bussiness" /></div>
                        <div class="b-scroll-bottom" id="top-menu">
                            <a class="b-link" href="#function">CUỘN XUỐNG</a>
                        </div>
                    </div>
                </section>
                <section class="b-page-help">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="b-heading text-center">
                                    <p class="b-text-norm">NỔI BẬT CỦA JOY</p>
                                    <h3 class="b-text-title">Joy giúp gì cho bạn ?</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            class="b-card wow bounceInDown"
                            data-wow-delay=".5s"
                            data-wow-duration="1s">
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/Tim_Dung_Dia_Diem.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">TÌm Đúng Địa Điểm</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/De_Xuat_Mon_An.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">Đề xuất món ăn</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/Tiet_Kiem_Thoi_GIan.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">Tiết kiệm thời gian</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/Tiet_Kiem_Chi_Phi.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">Tiết Kiệm Chi Phí</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/Tim_Theo_Cam_Xuc.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">Tìm Theo Cảm Xúc</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/Tim_Dung_Dia_Diem.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">TÌm Đúng Địa Điểm</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/De_Xuat_Mon_An.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">Đề xuất món ăn</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/Tiet_Kiem_Thoi_GIan.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">Tiết kiệm thời gian</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/Tiet_Kiem_Chi_Phi.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">Tiết Kiệm Chi Phí</p>
                                </div>
                            </div>
                            <div class="b-card-item">
                                <div class="b-icon"><img src="./images/home/Tim_Theo_Cam_Xuc.svg" alt="Icon" />
                                </div>
                                <div class="b-content">
                                    <p class="b-text-norm">Tìm Theo Cảm Xúc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="b-page-function" id="function">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-7">
                                <div
                                    class="b-images wow bounceInLeft"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/home/block-1.png" alt="Table" width="100%" /></div>
                            </div>
                            <div class="col-lg-5">
                                <div class="b-function">
                                    <div
                                        class="b-content wow bounceInRight"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h3 class="b-text-title">Gợi Ý Sức Khỏe</h3>
                                        <p class="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="b-function">
                                    <div
                                        class="b-content wow bounceInLeft"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h3 class="b-text-title">Chơi game góp ý</h3>
                                        <p class="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem elementum in.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div
                                    class="b-images wow bounceInRight"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/home/block-2.png" alt="Table" width="100%" /></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-7">
                                <div
                                    class="b-images wow bounceInLeft"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/home/block-3.png" alt="Table" width="100%" /></div>
                            </div>
                            <div class="col-lg-5">
                                <div class="b-function">
                                    <div
                                        class="b-content wow bounceInRight"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h3 class="b-text-title">Hệ thống phân tích ngôn ngữ</h3>
                                        <p class="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem elementum in.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="b-function">
                                    <div
                                        class="b-content wow bounceInLeft"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h3 class="b-text-title">Cá Nhân hóa</h3>
                                        <p class="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem elementum in.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div
                                    class="b-images wow bounceInRight"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/home/block-4.png" alt="Table" width="100%" /></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-7">
                                <div
                                    class="b-images wow bounceInLeft"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/business/block-5.png" alt="Table" width="100%" /></div>
                            </div>
                            <div class="col-lg-5">
                                <div class="b-function">
                                    <div
                                        class="b-content wow bounceInRight"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h5 class="b-text-function">Tính năng</h5>
                                        <h3 class="b-text-title">Quản lý nhân viên</h3>
                                        <p class="b-text-norm">
                                            orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                            tempus lorem, a auctor eros pretium sit amet. Aliquam faucibus est lectus, nec
                                            malesuada sem elementum in.

                                        </p>
                                        <div class="b-list-function">
                                            <div class="b-item">
                                                <div class="b-icon">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                                <p class="b-text-norm">Phân quyền nhân viên của quán</p>
                                            </div>
                                            <div class="b-item">
                                                <div class="b-icon">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                                <p class="b-text-norm">Truy cập dữ liệu hoạt động của nhân viên</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="b-page-service">
                    <div class="b-content">
                        <h3
                            class="b-text-title wow bounceInUp"
                            data-wow-delay=".5s"
                            data-wow-duration="1s">Hãy để joy phục vụ bạn ngay bây giờ !</h3>
                        <Link class="b-btn-messeger" to="#">Messenger</Link>
                    </div>
                </section>
                <section class="b-page-business">
                    <div
                        class="b-images wow bounceInRight"
                        data-wow-delay=".5s"
                        data-wow-duration="1s"><img src="./images/home/bottom-banner-item.png" alt="Banner" width="100%" /></div>
                    <div class="b-content">
                        <h3 class="b-text-title">Joy và Doanh nghiệp</h3>
                        <p class="b-text-norm">Kết nối khách hàng của bạn 24/7 Hổ trợ việc kinh doanh của bạn 24/7</p>
                        <Link class="b-link" to="#">Khám phá các lợi ích</Link>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default user;