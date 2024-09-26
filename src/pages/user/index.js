import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


export default function Index() {
    return (
        <>  
            <section className="main-collection hidden-sm-down">
                <div className="container collection-gird">
                    <div className="row list_dm">
                        <div>
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container">
                    <div className="row_collection">
                        <aside id="left_collection" className="col-lg-3 col-md-12 sider_bar_col col-collection-best">
                            <div className="col-lg-12 col-md-12 product_select">
                                <div className="block-title block">
                                    <h5>
                                        <span>Tìm kiếm theo</span>
                                    </h5>
                                </div>
                            </div>
                            <div className="filter-container">
                                <div className="filter-container_selected">
                                    <div className="">
                                        <span className="">
                                            <i className="fa fa-arrow-left hidden-sm-up"></i>
                                            Bạn chọn
                                        </span>
                                        <a>
                                            Bỏ hết
                                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                                        </a>
                                    </div>                          
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}