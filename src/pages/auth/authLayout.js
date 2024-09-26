import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <>
            <div className={'container-fluid row login-page justify-content-center align-items-center'}>
                <div className="card login-content p-0 bg-transparent">
                    <div className="card-body">
                        <div className={'text-center'}>
                            <div class="logo-login flex flex-col">
                                <a class=" flex flex-col" href="/">
                                    <span class="fs-1 logo-text text-center" >OpenLAB</span>
                                    <span class="logo-text-mini text-center font-medium ">AI/IoT as a service</span>
                                </a>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}