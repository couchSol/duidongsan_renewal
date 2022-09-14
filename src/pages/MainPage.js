import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main>
      <div class="main-sm sm-only">
        <Link to="/duidongsan_renewal/space">
          <div className="sm-about">
            <div>공간</div>
          </div>
        </Link>
        <Link to="/duidongsan_renewal/menu">
          <div className="sm-menu">
            <div>메뉴</div>
          </div>
        </Link>
        <Link to="/duidongsan_renewal/store">
          <div className="sm-shop">
            <div>상점</div>
          </div>
        </Link>
      </div>
      <div class="main-lg lg-only"></div>
    </main>
  );
}

export default MainPage;
