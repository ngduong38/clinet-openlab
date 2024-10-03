

export default function Minioption() {
    return (
        <>
             <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
                    <div className="position-relative">
                        <div className="position-absolute top-0 end-0 mt-2 me-2 d-flex gap-3">
                            <div className="position-relative">
                                <i className="fas fa-shopping-cart text-secondary"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
                            </div>
                            <div className="position-relative">
                                <i className="fas fa-bell text-secondary"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
                            </div>
                            <i className="fas fa-user-circle text-secondary"></i>
                        </div>
                        <div className="mt-5 bg-white rounded shadow p-3 w-100" style={{ maxWidth: '300px' }}>
                            <div className="d-flex align-items-center border-bottom pb-2 mb-2">
                                <i className="fas fa-search text-secondary me-2"></i>
                                <input type="text" placeholder="Type a command or search." className="form-control border-0 p-0"/>
                            </div>
                            <div className="text-secondary mb-2">Settings</div>
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="fas fa-id-card me-2"></i>
                                    <span>Thông tin cá nhân</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="fas fa-sync-alt me-2"></i>
                                    <span>Thông tin khóa học</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="fas fa-calculator me-2"></i>
                                    <span>Thông tin Thiết bị/Kit</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                                    <i className="fas fa-sign-out-alt me-2"></i>
                                    <span>Đăng xuất</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}