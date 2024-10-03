import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
    const {
        register, 
        handleSubmit,
        formState: {errors},

    } = useForm();
    return (
        <>
            <form className={"pb-3"}  >
                <div className="mb-3">
                    <label htmlFor="inputMSV" className="form-label">Mã sinh viên </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputMSV"
                        placeholder="Mã sinh viên"
                        {...register("MSV", {
                            required: 'Mã sinh viên không được để trống',
                            maxLength: {
                                value: 10,
                                message: "Mã sinh viên không được lớn hơn 10 ký tự"
                            }
                            })
                        }            
                    />
                    {errors.MSV && <p className={'text-danger fw-bold'}>{errors.MSV.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputMSV" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputMSV"
                        placeholder="Full Name"
                        {...register("FNAME", {
                            required: 'Tên sinh viên không được để trống',
                            })
                        }            
                    />
                    {errors.FNAME && <p className={'text-danger fw-bold'}>{errors.FNAME.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Password"
                        {
                            ...register('password', {
                                required: 'Mật khẩu không được để trống',
                                maxLength: {
                                    value: 20,
                                    message: "Mật khẩu không được lớn hơn 20 ký tự"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Mật khẩu không được ít hơn 6 ký tự"
                                }
                            })
                        }
                    />
                    {errors.password && <p className={'text-danger fw-bold'}>{errors.password.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Confirm Password"
                        {
                            ...register('password', {
                                required: 'Mật khẩu không được để trống',
                                maxLength: {
                                    value: 20,
                                    message: "Mật khẩu không được lớn hơn 20 ký tự"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Mật khẩu không được ít hơn 6 ký tự"
                                }
                            })
                        }
                    />
                    {errors.password && <p className={'text-danger fw-bold'}>{errors.password.message}</p>}
                </div>
                <div className={'text-center mb-3 register-box'}>
                    <button type="submit" className="btn btn-primary w-box">SIGN UP</button>
                    <button type="submit" className="btn btn-primary w-box" formAction="/login">LOGIN</button>
                </div>
            </form>
        </>
    )
}