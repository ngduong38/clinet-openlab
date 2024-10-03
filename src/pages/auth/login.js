import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
    const {
        register, 
        handleSubmit,
        formState: {errors},

    } = useForm();
    return (
        <>
            <form className={"pb-3"}  >
                <div className="mb-3">
                    <label htmlFor="inputMSV" className="form-label">Mã sinh viên</label>
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
                    <label htmlFor="inputPassword" className="form-label">Mật khẩu</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Mật khẩu"
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
                <div className="mb-3 d-md-flex align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember Me
                        </label>
                    </div>
                    <div className="w-50 text-md-end ">
                        <a href="#">Forgot Password</a>
                    </div>
                </div>
                <div className={'text-center mb-3'}>
                    <button type="submit" className="btn btn-primary w-100" formAction="/home">LOGIN</button>
                </div>
                <div className={'text-center mb-3'}>
                    <a>Not register?</a>
                    <a className="text-primary" href="/register">Create an account</a>
                </div>
            </form>
        </>
    )
}