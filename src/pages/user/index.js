import React from 'react'
import { Products } from '../../helpers/constants';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FaStar, FaSignal, FaRegStar,FaArrowRight } from "react-icons/fa";
import { useState } from 'react';

export default function Index() {
  
  return (
    <>
      <div className='container'>
        <div className='fs-2 text-uppercase text-center mb-3'>Các sản phẩm hiện có</div>
        <div className='d-flex flex-warp align-items-center justify-content-center'>
          <div className=" rounded-lg shadow-lg m-3">
              <div className="position-relative d-flex justify-content-center align-items-center">
                  <img src="https://www.e-tinkers.com/wp-content/uploads/2020/01/stm32-blue-pill.jpg" alt="Products Image" className="card object-fit-cover rounded-lg " />
                  <div className=' position-absolute btn-link btn-hidden'>
                    <button className="btn btn-outline-dark">
                              Xem chi tiết <FaArrowRight />
                    </button>
                  </div>

              </div>
              <div className=" p-2">
                <div className="d-flex justify-content-center">
                  <h5 className="text-center">Kit STM32</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Số lượng: 10</p>
                    <div className="ml-2 text-red-500">
                       Trạng thái: Tốt
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p>Đã mượn: 5</p>
                  <p>Còn lại: 5</p>
                </div>
                <p className='mt-2'>Lần mượn gần nhất:10/03/2023 </p>
                <div className="d-flex justify-content-center mt-2">
                  <button type="submit" className="btn btn-primary w-box">Mượn</button>
                </div>
              </div>
          </div>
          <div className=" rounded-lg shadow-lg m-3">
              <div className="position-relative d-flex justify-content-center align-items-center">
                  <img src="https://dientutuonglai.com/uploads/media/2018_10/arduino/arduino-uno.png?1541773249244" alt="Products Image" className="card object-fit-cover rounded-lg " />
                  <div className=' position-absolute btn-link btn-hidden'>
                    <button className="btn btn-outline-dark">
                              Xem chi tiết <FaArrowRight />
                    </button>
                  </div>

              </div>
              <div className="mt-4 p-2">
                  <div className="d-flex justify-content-between">
                      <div className="flex text-yellow-400">
                          {[...Array(5)].map(start => {
                            return (
                              <>
                              <label><FaRegStar /></label>
                              </>
                            )
                          })}
                      </div>
                      <div className="ml-2 text-red-500">
                        <FaSignal /> Có sẵn
                      </div>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <h5 className="text-center">Kit Arduino</h5>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <button type="submit" className="btn btn-primary w-box">Mượn</button>
                    <button type="submit" className="btn btn-primary w-box" >Trả</button>
                  </div>
          
              </div>
          </div>
          <div className=" rounded-lg shadow-lg m-3">
              <div className="position-relative d-flex justify-content-center align-items-center">
                  <img src="https://nshopvn.com/wp-content/uploads/2019/03/kit-rf-thu-phat-wifi-bluetooth-esp32-vsto-1-600x600.jpg" alt="Products Image" className="card object-fit-cover rounded-lg " />
                  <div className=' position-absolute btn-link btn-hidden'>
                    <button className="btn btn-outline-dark">
                              Xem chi tiết <FaArrowRight />
                    </button>
                  </div>

              </div>
              <div className="mt-4 p-2">
                  <div className="d-flex justify-content-between">
                      <div className="flex text-yellow-400">
                          {[...Array(5)].map(start => {
                            return (
                              <>
                              <label><FaRegStar /></label>
                              </>
                            )
                          })}
                      </div>
                      <div className="ml-2 text-red-500">
                        <FaSignal /> Có sẵn
                      </div>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <h5 className="text-center">Kit ESP32</h5>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <button type="submit" className="btn btn-primary w-box">Mượn</button>
                    <button type="submit" className="btn btn-primary w-box" >Trả</button>
                  </div>
          
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

