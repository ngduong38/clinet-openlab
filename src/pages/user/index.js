import React from 'react'
import { Products } from '../../helpers/constants';
import { FaArrowRight } from "react-icons/fa";
import Borrow from './tasks/borrow';
import { useEffect, useState } from "react";

export default function Index() {

  const [showBorrow, setShowBorrow] = useState(false);
  useEffect(
    () => {
        document.querySelectorAll('.borrow').forEach(
            (element) => {
                element.addEventListener('click',function(){
                    console.log(this.classList);
                    setShowBorrow(true);
                })
            }
        )
    }
  )
  
  return (
    <>
      <div className='container'>
        <div className='fs-2 text-uppercase text-center mb-3'>Các sản phẩm hiện có</div>
        <div className='d-flex rounded-lg shadow-lg justify-content-center '>
          {Products.map((item) => (
            <div className='d-flex flex-warp align-items-center justify-content-center' key={item.id}> 
              <div className=" rounded-lg shadow-lg m-3" >
                  <div className="position-relative d-flex justify-content-center align-items-center">
                      <img src={item.image} alt="Products Image" className="card object-fit-cover rounded-lg " />
                      <div className=' position-absolute btn-link btn-hidden'>
                        <button className="btn btn-outline-dark">
                                  Xem chi tiết <FaArrowRight />
                        </button>
                      </div>
                  </div>
                  <div className=" p-2">
                    <div className="d-flex justify-content-center">
                      <h5 className="text-center">{item.title}</h5>
                    </div>
                    <div className="d-flex">
                        <p className='col-md-8'>Số lượng: {item.total}</p>
                        <div className="ml-2 text-red-500 col">
                          Trạng thái: {item.available}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className='col-md-8'>Đã mượn: {item.borrow}</p>
                      <p className='col'>Còn lại: {item.idle}</p>
                    </div>
                    <p className='mt-2'>Lần mượn gần nhất: {item.date} </p>
                    <div className="d-flex justify-content-center mt-2">
                      <button type="submit" className="btn btn-primary w-box borrow">Mượn</button>
                    </div>
                  </div>
                  <Borrow showBorrow={showBorrow} setShowBorrow={setShowBorrow} />
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

