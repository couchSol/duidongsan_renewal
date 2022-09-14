import React from "react";
import { Link } from "react-router-dom";
import logo from "./static/images/logo.png";

function GnbDrawer() {
  return (
    <div className="gnb-drawer sm-only">
      <a className="gnb-icon-btn" href="/" aria-label="메뉴 서랍 열기">
        <i className="ic-menu"></i>
      </a>
    </div>
  );
}

function Gnb() {
  return (
    <nav className="lg-only">
      <h2 className="visually-hidden">메뉴</h2>
      <ul className="gnb-nav-list">
        <Link to="/duidongsan_renewal/space">
          <li className="gnb-nav-item">공간</li>
        </Link>
        <Link to="/duidongsan_renewal/menu">
          <li className="gnb-nav-item">메뉴</li>
        </Link>
        <Link to="/duidongsan_renewal/store">
          <li className="gnb-nav-item">상점</li>
        </Link>
      </ul>
    </nav>
  );
}

function GnbButton() {
  return (
    <div className="gnb-btn-group">
      <a className="gnb-icon-btn" href="/" aria-label="로그인 페이지로 이동">
        <i className="ic-login"></i>
      </a>
      <a className="gnb-icon-btn" href="/" aria-label="장바구니 페이지로 이동">
        <i className="ic-cart"></i>
      </a>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="gnb">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-lg-12">
              <div className="gnb-wrapper">
                <h1 className="logo">
                  <Link to="/duidongsan_renewal/">
                    <img src={logo} alt="공간 뒷동산" />
                  </Link>
                </h1>
                <GnbDrawer />
                <Gnb />
                <GnbButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
