import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import React, { useState } from 'react'



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
                                    <MdOutlineShoppingCart />
                                    <FaRegBell />
                                </div>
                            </div>
                            <button data-state="closed" class="xs:w-full sm:w-full ">
                                <div class="flex justify-center items-center gap-2 cursor-pointer ">
                                    <FaRegCircleUser />
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}