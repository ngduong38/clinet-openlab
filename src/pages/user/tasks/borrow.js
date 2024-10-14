import Modal from 'react-bootstrap/Modal';
import {AiOutlineClose} from "react-icons/ai"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addItems, dropItems } from "../../../redux/slide/itemSlice"
import { Products } from '../../../helpers/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Borrow({showBorrow, setShowBorrow}){
    const handleClose = () => setShowBorrow(false);
    const [selectedDate, setSelectedDate] = useState(null)
    const dispatch = useDispatch()
    const ItemsSlice = useSelector(state => state.itemsSlice.ItemsArr)
    const notify = () => toast.success("Mượn thành công")
    const [selectedProduct, setProduct] = useState(null);
    
    return (
        <>
            <Modal
                show={showBorrow}
                onHide={() => setShowBorrow(false)}
                size='lg'
                dialogClassName='modal-borrow'
                aria-labelleby="example-custom-modal-styling-title"
                centered={true}
            >
                <AiOutlineClose className='btn-close' onClick={handleClose}/>
                <Modal.Body className='p-0'>
                    {Products.map((item) => (
                        <div class="d-flex justify-content-center align-items-center h-75 bg-light">
                            <div class="bg-white p-4 rounded-lg shadow-lg" >
                                <div class="row" key={item.id}> 
                                    <div class="col-md-5">
                                        <div class="border border-4 border-secondary p-2">
                                        <img src={item.image} alt="Products Image" className="img-fluid" />
                                        {/* <img src="https://placehold.co/400x400" alt="Product image" class="img-fluid w-100"/> */}
                                        </div>
                                        {/* <div class="d-flex mt-4">
                                        <img src="https://placehold.co/100x100" alt="Thumbnail 1" class="border border-2 border-secondary p-1 me-2"/>
                                        <img src="https://placehold.co/100x100" alt="Thumbnail 2" class="border border-2 border-secondary p-1 me-2"/>
                                        <img src="https://placehold.co/100x100" alt="Thumbnail 3" class="border border-2 border-secondary p-1"/>
                                        </div> */}
                                    </div>
                                    <div class="col-md-7 ps-4">
                                        <h1 class="fs-4 fw-bold">{item.title}</h1>
                                        <div className='mt-3'>
                                            <label class="form-label fs-6">Mô tả: </label>
                                            <p class="mt-2 text-muted lh-base">
                                                {item.description}
                                            </p>
                                            <a href="#" class="text-primary d-block">Xem chi tiết</a>
                                        </div>
                                        
                                        <div class="mt-3 d-flex align-items-center">
                                            <label class="form-label col-3">Ngày mượn</label>
                                            <DatePicker
                                            className='border border-dark btn btn-sm'
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            />
                                        </div>
                                        <div class="mt-3 d-flex align-items-center">
                                            <label class="form-label col-3">Ngày trả</label>
                                            <DatePicker
                                            className='border border-dark btn btn-sm'
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            />
                                        </div>
                                        
                                        <div class="mt-3 d-flex align-items-center">
                                            <label class="form-label col-md-3">Số lượng</label>
                                            <div class=" input-group ">
                                                <button class="btn btn-outline-secondary" type="button" onClick={() => dispatch(dropItems(item))} >-</button>
                                                <div type="text" class="form-control text-center">{ItemsSlice.length}</div>
                                                <button class="btn btn-outline-secondary" type="button" onClick={() => dispatch(addItems(item))} >+</button>
                                            </div>
                                            <button class=" btn btn-primary ms-3 w-100 " onClick={notify} >Mượn</button>
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Modal.Body>
            </Modal>
        </>
    )
} 