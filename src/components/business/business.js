import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import Footer from '../footer/footer';
import { Link } from "react-router-dom";

class business extends Component {
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
                <Navbar></Navbar>
                <section className="b-page-hero" id="b-page-hero">
                    <div className="container">
                        <div className="b-content">
                            <h3 className="b-text-title">Kết nối với khách hàng của bạn</h3>
                            <p className="b-text-norm">
                                Kết nổi khách hàng của bạn 24/7</p>
                            <p className="b-text-norm">Hỗ trợ việc kinh doanh của bạn 24/7</p>
                        </div>
                        <div className="b-watch">
                            <div
                                className="b-item wow bounceInRight"
                                data-wow-delay=".5s"
                                data-wow-duration="1s">
                                <Link className="b-link" to="#">Xem video</Link>
                            </div>
                            <div
                                className="b-item wow bounceInLeft"
                                data-wow-delay=".5s"
                                data-wow-duration="1s">
                                <Link className="b-link" to="#">Đăng ký miễn phí</Link>
                            </div>
                        </div>
                        <div className="b-images"><img src="./images/business/banner-top.png" alt="Bussiness" /></div>
                        <div className="b-scroll-bottom" id="top-menu">
                            <a className="b-link" href="#function">CUỘN XUỐNG</a>
                        </div>
                    </div>
                </section>
                <section className="b-page-customer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="b-heading">
                                    <p className="b-text-norm">Nhận đánh giá, góp ý từ khách hàng dễ dàng và nhanh chóng</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <div
                                    className="b-complain wow bounceInLeft"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s">
                                    <div className="b-content">
                                        <h3 className="b-text-title">Cách làm truyển thống</h3>
                                        <p className="b-text-norm">Bạn bối rối với hàng tần góp ý bừa bộn</p>
                                    </div>
                                    <div className="b-images"><img src="./images/business/wwj-1.png" alt="WWWJ" width="100%" /></div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div
                                    className="b-solve wow bounceInRight"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s">
                                    <div className="b-images"><img src="./images/business/wwj-2.png" alt="WWWJ" width="100%" /></div>
                                    <div className="b-content">
                                        <h3 className="b-text-title">Với GonJoy</h3>
                                        <p className="b-text-norm">
                                            Tự động thu nhập và phân tích góp ý của khách hàng để cải thiện dịch vụ của bạn

                                        </p>
                                    </div>
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
                                    data-wow-duration="1s"><img src="./images/business/block-1.png" alt="Table" width="100%" /></div>
                            </div>
                            <div className="col-lg-5">
                                <div className="b-function">
                                    <div
                                        className="b-content wow bounceInRight"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h5 className="b-text-function">Tính năng</h5>
                                        <h3 className="b-text-title">Đặt Bàn</h3>
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
                                                <p className="b-text-norm">Quản lý đặt bàn hiệu quả</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Giao diện hội thoại dể đáp ưng như cầu khách hàng nhanh chóng</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Nhắc bạn giữ bàn</p>
                                            </div>
                                        </div>
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
                                        <h5 className="b-text-function">Tính năng</h5>
                                        <h3 className="b-text-title">Ship Hàng</h3>
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
                                                <p className="b-text-norm">Tương tác với khách hàng</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Kết nối với dịch vụ giao hàng</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Theo dõi quá trình giao hàng</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Quản lý số lượng, chất lượng và chi phí giao hàng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div
                                    className="b-images wow bounceInRight"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/business/block-2.png" alt="Table" width="100%" /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div
                                    className="b-images wow bounceInLeft"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/business/block-3.png" alt="Table" width="100%" /></div>
                            </div>
                            <div className="col-lg-5">
                                <div className="b-function">
                                    <div
                                        className="b-content wow bounceInRight"
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s">
                                        <h5 className="b-text-function">Tính năng</h5>
                                        <h3 className="b-text-title">Phân tích ý kiến khách hàng</h3>
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
                                                <p className="b-text-norm">Tư vấn viên marrketing ảo</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Cung cấp phân tích hành vi khách hàng trên dồ thị</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Thu thập dữ liệu khách hàng</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Giao tiếp và làm hài lòng khách hàng trực tiếp</p>
                                            </div>
                                        </div>
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
                                        <h5 className="b-text-function">Tính năng</h5>
                                        <h3 className="b-text-title">Tối ưu hóa menu</h3>
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
                                                <p className="b-text-norm">Chia sẻ menu của bàn với giao diện thân thiện</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Tùy biến menuu theo mục đích và sự kiện của bạn</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Sắp xếp menu thông minh theo ngày, giá và best seller</p>
                                            </div>
                                            <div className="b-item">
                                                <div className="b-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <p className="b-text-norm">Giới thiệu khuyến mãi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div
                                    className="b-images wow bounceInRight"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"><img src="./images/business/block-4.png" alt="Table" width="100%" /></div>
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
                <section className="b-page-person">
                    <div className="b-heading">
                        <h3 className="b-text-title">Hơn 500+ cửa hàng đã kết nổi với Joy</h3>
                    </div>
                    <div className="b-tags">
                        <div className="b-item">
                            <div className="b-images"><img src="./images/business/people-1.jpg" alt="person" width="100%" /></div>
                            <div className="b-content">
                                <h3 className="b-tex-title">Person One Support</h3>
                                <p className="b-text-norm">
                                    orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                    tempus lorem, a auctor eros pretium sit amet.

                                </p>
                            </div>
                        </div>
                        <div className="b-item">
                            <div className="b-images"><img src="./images/business/people-2.jpg" alt="person" width="100%" /></div>
                            <div className="b-content">
                                <h3 className="b-tex-title">Person One Support</h3>
                                <p className="b-text-norm">
                                    orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                    tempus lorem, a auctor eros pretium sit amet.

                                </p>
                            </div>
                        </div>
                        <div className="b-item">
                            <div className="b-images"><img src="./images/business/people-3.jpg" alt="person" width="100%" /></div>
                            <div className="b-content">
                                <h3 className="b-tex-title">Person One Support</h3>
                                <p className="b-text-norm">
                                    orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                    tempus lorem, a auctor eros pretium sit amet.

                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="b-page-conenct">
                    <div className="container">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="b-content">
                                <h3
                                    className="b-text-title wow bounceInDown"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s">Kết nôi với khách hàng của bạn</h3>
                                <p
                                    className="b-text-norm wow bounceInDown"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s">
                                    orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend
                                    tempus lorem, a auctor eros pretium sit amet.

                                </p>
                                <Link className="b-link" to="#">Đăng ký miễn phí</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default business;