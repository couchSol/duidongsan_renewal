import React from 'react';
import {productData} from './StoreData'

function ProductList(){
    return productData.map((store) => {
        return (
            <div className="store-item col-sm-2 col-lg-3" id={store.id} key={store.id}>
                <div className="store-img">
                    <img src={store.image} alt={store.title} />
                </div>
                <div className="store-title">{store.title}</div>
            </div>
        )
    })
    
}

function StorePage() {
  return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-lg-12">
                    <section className="store-intro">
                        <div className="store-intro-img col-sm-4 col-lg-6"></div>
                        <div className="store-intro-text col-sm-4 col-lg-5">
                            <p className="text-title">
                                뒷동산의 술잔과 그릇
                            </p>
                            <p className="text-content">
                                뒷동산의 술잔과 그릇은 손으로 하나하나 빚어집니다.
                                뒷동산에서 느끼신 정성을 어디로든 데려가 보세요.
                            </p>
                        </div>
                    </section>
                    <section className="store">
                        <div className="store-wrapper">
                            <div className="lnb">
                                <div className="lnb-list">
                                    <div className="lnb-item">전체</div>
                                    <div className="lnb-item">술잔</div>
                                    <div className="lnb-item">그릇</div>
                                </div>
                            </div>
                            <div className="store-list">
                                <ProductList />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
  );
}

export default StorePage;