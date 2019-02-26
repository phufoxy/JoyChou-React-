import React, {Component} from 'react';
import Header from '../business/navbar/navbar';
import Footer from '../footer/footer';
class about extends Component {
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
                <Header></Header>
                <section className="b-page-hero b-about">
                    <div className="container">
                        <div className="b-scroll-bottom" id="top-menu">
                            <a className="b-link" href="#vision">CUỘN XUỐNG</a>
                        </div>
                    </div>
                </section>
                <section className="b-page-passion">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-3 wow bounceInLeft"
                                data-wow-delay=".5s"
                                data-wow-duration="1s">
                                <div className="b-content">
                                    <h3 className="b-text-title">Từ đam mê, Từ khao khát</h3>
                                </div>
                                <div className="b-images"><img src="./images/about-us/Nhan_Tai_Dat_Viec.png" alt="nhanTai"/></div>
                            </div>
                            <div
                                className="col-lg-9 wow bounceInRight"
                                data-wow-delay=".5s"
                                data-wow-duration="1s">
                                <div className="b-content">
                                    <p className="b-text-norm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                        qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                                        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                        vitae dicta sunt explicabo.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="b-page-vision" id="vision">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="b-vision">
                                    <div className="b-heading">
                                        <h3 className="b-text-title">Tầm nhìn</h3>
                                    </div>
                                    <div className="b-content">
                                        <div
                                            className="b-list-item wow bounceInDown"
                                            data-wow-delay=".5s"
                                            data-wow-duration="1s">
                                            <div className="b-icon"><img src="./images/about-us/Cong_Nghe.svg" alt="Cong"/></div>
                                            <div className="b-content">
                                                <p className="b-text-norm">Công nghệ 4.0 sẽ thay đổi cách chúng ta sống và làm việc.</p>
                                            </div>
                                        </div>
                                        <div
                                            className="b-list-item wow bounceInDown"
                                            data-wow-delay=".5s"
                                            data-wow-duration="1s">
                                            <div className="b-icon"><img src="./images/about-us/Hieu_Qua_Cong_VIec.svg" alt="Cong"/></div>
                                            <div className="b-content">
                                                <p className="b-text-norm">
                                                    Hiệu quả công việc, chất lượng cuộc sống trong một thế giới phẳng đang và sẽ là
                                                    một thử thách cho toàn xã hội.

                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="b-list-item wow bounceInDown"
                                            data-wow-delay=".5s"
                                            data-wow-duration="1s">
                                            <div className="b-icon"><img src="./images/about-us/Dap_Ung.svg" alt="Cong"/></div>
                                            <div className="b-content">
                                                <p className="b-text-norm">
                                                    Đáp ứng kịp thời những mong muốn ẩn sâu bên trong của khách hàng (customer’s
                                                    insight) là thách thức của mọi doanh nghiệp.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="b-vision">
                                    <div className="b-heading">
                                        <h3 className="b-text-title">Sứ mệnh</h3>
                                    </div>
                                    <div className="b-content">
                                        <div
                                            className="b-list-item wow bounceInDown"
                                            data-wow-delay=".5s"
                                            data-wow-duration="1s">
                                            <div className="b-icon"><img src="./images/about-us/Tri_Tue_Nhan_Tao.svg" alt="Cong"/></div>
                                            <div className="b-content">
                                                <p className="b-text-norm">
                                                    Ứng dụng trí tuệ nhân tạo, big data, IoT xây dựng một trợ lý ảo có khả năng cá
                                                    nhân hoá cao, dễ dàng chia sẻ, hỗ trợ người dùng trong ăn uống và giải trí.

                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="b-list-item wow bounceInDown"
                                            data-wow-delay=".5s"
                                            data-wow-duration="1s">
                                            <div className="b-icon"><img src="./images/about-us/Khuyen_Cao.svg" alt="Cong"/></div>
                                            <div className="b-content">
                                                <p className="b-text-norm">Công nghệ 4.0 sẽ thay đổi cách chúng ta sống và làm việc.</p>
                                            </div>
                                        </div>
                                        <div
                                            className="b-list-item wow bounceInDown"
                                            data-wow-delay=".5s"
                                            data-wow-duration="1s">
                                            <div className="b-icon"><img src="./images/about-us/Thu_Nhap_Trai_Nghiem.svg" alt="Cong"/></div>
                                            <div className="b-content">
                                                <p className="b-text-norm">Công nghệ 4.0 sẽ thay đổi cách chúng ta sống và làm việc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="b-page-coe">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-heading">
                                    <h3 className="b-text-title">Đội ngũ nhóm phát triển</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div
                                    className="b-card wow bounceInDown"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s">
                                    <div className="b-images"><img src="./images/about-us/Oliver.png" alt="Overlight"/></div>
                                    <div className="b-content">
                                        <h3 className="b-text-title">Bui Hoang KHoa Nguyen</h3>
                                        <p className="b-text-normm">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className="b-card wow bounceInDown"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s">
                                    <div className="b-images"><img src="./images/about-us/Oliver.png" alt="Overlight"/></div>
                                    <div className="b-content">
                                        <h3 className="b-text-title">Bui Hoang KHoa Nguyen</h3>
                                        <p className="b-text-normm">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className="b-card wow bounceInDown"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s">
                                    <div className="b-images"><img src="./images/about-us/Oliver.png" alt="Overlight"/></div>
                                    <div className="b-content">
                                        <h3 className="b-text-title">Bui Hoang KHoa Nguyen</h3>
                                        <p className="b-text-normm">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className="b-card wow bounceInDown"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s">
                                    <div className="b-images"><img src="./images/about-us/Oliver.png" alt="Overlight"/></div>
                                    <div className="b-content">
                                        <h3 className="b-text-title">Bui Hoang KHoa Nguyen</h3>
                                        <p className="b-text-normm">Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default about;