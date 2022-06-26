import React from 'react';

function MainPage() {
  return (
    <main>
        <div class="main-sm sm-only">
            <div className="sm-about">
                <div>공간</div>
            </div>
            <div className="sm-menu">
                <div>메뉴</div>
            </div>
            <div className="sm-shop">
                <div>상점</div>
            </div>
        </div> 
        <div class="main-lg lg-only">          
        </div>       
    </main>
  );
}

export default MainPage;