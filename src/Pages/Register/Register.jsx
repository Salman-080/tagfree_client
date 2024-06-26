import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { AuthContext } from "../../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Register = () => {

    const { createUser, profileInfo, logOut, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const imageFile = {
            image: e.target.image.files[0],

        }

        //image hosting to imagebb
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });

        if (res.data.success) {
            const registerName = form.get('name');
            const registerEmail = form.get('email');
            const registerPassword = form.get('password');
            const registerImage = res.data.data.display_url;

            createUser(registerEmail, registerPassword)
                .then(res => {
                    console.log(res.user)
                    
                    toast.success('Successfully Registered! Login Now', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    profileInfo(registerName, registerImage)
                        .then(async (res) => {


                            setTimeout(() => {
                                logOut()
                                    .then(res => {
                                        navigate("/login");
                                    })
                                    .catch(err => {

                                    })
                            }, 2000)

                        })
                        .catch(error => {
                            console.log(error);

                            toast.error(error.message, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                               
                                });

                        })

                })
                .catch(err => {
                    console.log(err)
                    toast.error(err.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        
                    });

                })
        }



    }


    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(async (res) => {
                console.log(res.user);
   
                toast.success('Login Successfull!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    
                });
                
                setTimeout(() => {
                    navigate("/home");
                }, 2000)
                
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }




    return (
        <div className="flex flex-col  items-center ">
            <div className=" w-full md:w-[500px] flex flex-col justify-center items-center  ">
                <div className="text-center lg:text-left">
                    <br />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-[#222222] px-5 lg:px-8 py-[8px] lg:py-[12px] ">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mt-[8px] text-white">Register Now</h1>
                    <form onSubmit={handleRegister} className="space-y-[12px] text-white mt-[6px] ">

                        <div className="form-control space-y-1">
                            <label className="">
                                <span className="label-text text-white">Name</span>
                            </label>

                            <input name="name" type="text" placeholder="Your Name" className="input input-bordered bg-gray-600 " required />
                        </div>
                        <div className="form-control space-y-1">

                            <label className="">

                                <span className="label-text text-white">Image</span>
                            </label>

                            <input name="image" type="file" placeholder="Your Photo Url" className="" required/>
                        </div>
                        <div className="form-control space-y-1">

                            <label className="">

                                <span className="label-text text-white">Email</span>
                            </label>

                            <input name="email" type="email" placeholder="email" className="input input-bordered bg-gray-600 " required />
                        </div>
                        <div className="form-control space-y-1">
                            <label className="">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="At least 6 characters" className="input input-bordered bg-gray-600 " required />

                        </div>
                        <p className="text-sm text-gray-400">Already Have an Account? <Link to="/login"><span className="text-blue-600">Login</span></Link></p>
                        <div className="form-control mt-6">
                            <button className="py-[8px] bg-[#4A00FF] rounded-lg">Register</button>
                        </div>
                    </form>

                    <div className="text-center mt-[14px] space-y-2 ">
                        <p className="text-gray-500">Or Sign in using</p>
                        <button onClick={handleGoogleLogIn} className="bg-white px-6 py-[9px] rounded-[10px] flex justify-center items-center mx-auto gap-2">
                            <img className="w-[20px] h-[20px] rounded-full" src="/google.png" alt="" />
                            <p>Google</p>
                        </button>

                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </div>
    );
};

export default Register;