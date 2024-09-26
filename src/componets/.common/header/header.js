

export default function Header() {
    return (
        <>
            <div className="w-100 mw-100">
                <div className="body-header flex flex-col shadow p-2 mb-5 bg-white rounded sticky top">
                    <div className="flex text-primary justify-content-around py-3 bg-white">
                        <div className="content-left flex ">
                            <div class="logo flex flex-col">
                                <a class="cursor-pointer flex flex-col" href="/">
                                    <span class="fs-1 logo-text text-center" >OpenLAB</span>
                                    <span class="logo-text-mini text-center font-medium ">AI/IoT as a service</span>
                                </a>
                            </div>
                            <div class="bars">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl text-[#1464cc]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </div>
                            <ul className="main-header navbar-nav flex flex-row" >
                                <li className="header-items" >
                                    <a class="cursor-pointer flex flex-col hover" href="/">Trang chủ</a>
                                </li>
                                <li className="header-items" >
                                    <a class="cursor-pointer flex flex-col" href="https://openlab.com.vn/about">Giới thiệu</a>
                                </li>
                                <button class="header-items">
                                    <span>Sản Phẩm</span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-xs  icon-product " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                    </svg>
                                </button>
                                <button class="header-items">
                                    <a href="https://openlab.com.vn/blog">
                                        <span>Blog</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-xs  icon-product " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                        </svg>
                                    </a>
                                </button>
                                <li className="header-items" >
                                    <a class="cursor-pointer flex flex-col" href="https://openlab.com.vn/contact">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                        <div class="content-right flex">
                            <div class="flex gap-7 items-center">
                                <div class="relative cursor-pointer">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    <span class="absolute text-white text-xs font-medium block bottom-[-4px] right-[-5px] bg-red-500 z-10 w-[16px] rounded-full text-center">2</span>
                                </div>
                                <div class="relative cursor-pointer">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                        <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                                        <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
                                    </svg>
                                    <span class="absolute text-white text-xs font-medium block bottom-[-4px] right-[-5px] bg-red-500 z-10 w-[16px] rounded-full text-center">3</span>
                                </div>
                            </div>
                            <button data-state="closed" class="xs:w-full sm:w-full">
                                <div class="flex justify-center items-center gap-2 cursor-pointer ">
                                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" class="cursor-pointer text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}