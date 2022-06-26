import React from 'react';
import { menuData } from './MenuData'

function MenuList(){
    return menuData.map((menu) => {
        return (
            <div className="menu-item col-sm-2 col-lg-3" id={menu.id} key={menu.id}>
                <div className="menu-img">
                    <img src={menu.image} alt={menu.title} />
                </div>
                <div className="menu-title">{menu.title}</div>
            </div>
        )
    })
    
}

function MenuPage() {
  return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-lg-12">
                    <section className="menu-intro">
                        <div className="menu-intro-img col-sm-4 col-lg-6">                        </div>
                        <div className="menu-intro-text col-sm-4 col-lg-5">
                            <p className="text-title">
                                뒷동산의 술과 음식
                            </p>
                            <p className="text-content">
                                뒷동산의 술과 음식은 모두 직접 만듭니다.
                                장도 직접 담그고 술도 직접 양조한 술을 냅니다.
                            </p>
                        </div>
                    </section>
                    <section className="menu">
                        <div className="menu-wrapper">
                            <div className="lnb">
                                <div className="lnb-list">
                                    <div className="lnb-item">전체</div>
                                    <div className="lnb-item">술</div>
                                    <div className="lnb-item">음식</div>
                                </div>
                            </div>
                            <div className="menu-list">
                                <MenuList />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
  );
}

export default MenuPage;