import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Link } from "@nextui-org/react";
import { MailIcon } from "../../ModalInfo/MailIcon";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const { user, signIn, googleSignIn, resetPassword } = useContext(AuthContext);
    const [resetEmail, setResetEmail] = useState("");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const loginEmail = form.get('email');
        const loginPassword = form.get('password');

        signIn(loginEmail, loginPassword)
            .then(async (res) => {
                console.log(res);

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
            })
    }

    const handleEmailForReset = (e) => {
        // console.log(e.currentTarget.value)
        setResetEmail(e.currentTarget.value);
    }


    return (
        <div>
            <div className="flex flex-col items-center text-white">
                <div className="w-full md:w-[500px] flex flex-col justify-center items-center ">
                    <div className="text-center lg:text-left">
                        <br />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-[#222222] ">
                        <h1 className="text-xl md:text-4xl font-bold text-center mt-3 md:mt-5 lg:mt-7 text-white ">Login Now</h1>
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">

                                <label className="label">

                                    <span className="label-text text-white">Email</span>
                                </label>

                                <input name="email" type="email" placeholder="email" className="input input-bordered text-black bg-gray-600 " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered bg-gray-600" required />
                                <label className="">
                                    <Link onPress={onOpen} className="label-text-alt link link-hover text-white hover:text-blue-900 mt-1 text-md">Forgot password?</Link>

                                    {/* <Button onPress={onOpen} color="primary">Open Modal</Button> */}
                                    <Modal
                                        isOpen={isOpen}
                                        onOpenChange={onOpenChange}
                                        placement="top-center"
                                    >
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">Reset Password</ModalHeader>
                                                    <ModalBody>
                                                        <Input
                                                            autoFocus
                                                            endContent={
                                                                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                                            }
                                                            label="Email"
                                                            placeholder="Enter your email"
                                                            variant="bordered"
                                                            onChange={handleEmailForReset}
                                                        />


                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="danger" variant="flat" onPress={onClose}>
                                                            Close
                                                        </Button>
                                                        <Button color="primary" onClick={() => resetPassword(resetEmail)}>
                                                            Confirm
                                                        </Button>
                                                    </ModalFooter>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>

                                </label>
                            </div>
                            <p className="mt-1">New User? <NavLink to="/register"><span className="text-blue-600">Register</span></NavLink></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className="text-center mb-5 space-y-2">
                            <p className="text-gray-500">Or Sign in using</p>
                            <button onClick={handleGoogleLogIn} className="btn ">
                                <img className="w-[20px] h-[20px] rounded-full" src="/google.png" alt="" />
                                <p>Google</p>
                            </button>

                        </div>
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

        </div >

    );
};

export default Login;