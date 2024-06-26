
import { IoReorderThreeOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User, Input } from "@nextui-org/react";
import { AuthContext } from "../../Provider/Provider";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}


CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Navbar = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [searchActive, setSearchActive] = useState(true);
    const location = useLocation();


    useEffect(() => {
        console.log(location);
    }, [location])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSearchActive = () => {
        setSearchActive(false);
    }

    // const tabStyles = {
    //     color: 'white', 
    //     '&.Mui-selected': {
    //         color: 'white', 
    //     },
    // };

    const theme = createTheme({
        components: {
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: 'white',
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        '&.Mui-selected': {
                            color: 'white',
                        },
                    },
                },
            },
        },
    });

    const handleHighlightsNavigate = () => {
        navigate('/');
    }
    const handleSpecificationNavigate = () => {
        navigate('/specification');
    }

    const handleLogOut = () => {
        logOut()
            .then(res => {

            })
            .catch(err => {

            })
    }

    //if the username length is more than 20, then the rest will be ellipsed ...
    const userNameSlice = (name, len) => {
        if (name?.length <= len) {
            return name;
        }
        else {
            return name.slice(0, len) + '...'
        }
    }

    useEffect(() => {
        if (location.pathname === '/') {
            setValue(0); // Set active tab index for Highlights
        } else if (location.pathname === '/specification') {
            setValue(1); // Set active tab index for Specification
        } else {
            setValue(false); // Set null if neither route matches
        }
    }, [location?.pathname]);




    return (
        <div className="text-white">
            <div className="navbar bg-black  lg:px-[80px] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li>
                                <details>
                                    <summary>Products</summary>

                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Services</summary>

                                </details>
                            </li>
                            <li><a>News</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center md:gap-2 ml-10 md:ml-[70px] lg:ml-0">
                        <div className="">
                            <IoReorderThreeOutline className="text-white h-[30px] w-[30px] md:h-[42px] md:w-[42px] mt-[2px] cursor-pointer" />
                        </div>
                        <a className="btn btn-ghost text-2xl  text-white">TAGFREE</a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Products</summary>

                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Services</summary>

                            </details>
                        </li>
                        <li><a>News</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-[9px] md:space-x-4 lg:space-x-6 ">
                    {
                        searchActive ? <button><FaSearch onClick={handleSearchActive} className="text-white" /></button>
                            :
                            <Input
                                classNames={{
                                    base: "max-w-full sm:max-w-[10rem] h-10  ",
                                    mainWrapper: "h-full",
                                    input: "text-small",
                                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",

                                }}
                                placeholder="Type to search..."
                                size="sm"
                                // startContent={<SearchIcon size={18} />}
                                startContent={<FaSearch className="text-white" />}
                                type="search"



                            />
                    }


                    <MdOutlineShoppingCart className="text-lg cursor-pointer" />

                    {
                        user ? <div className="flex items-center gap-4">

                            <Dropdown placement="bottom-start">
                                <DropdownTrigger>
                                    <User
                                        as="button"
                                        avatarProps={{
                                            isBordered: true,
                                            src: user?.photoURL,
                                        }}
                                        className="transition-transform"
                                        // description="@tonyreichert"
                                        name={userNameSlice(user?.displayName || "", 20)}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="User Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-bold">Signed in as</p>
                                        <p className="font-bold">{user?.email}</p>
                                    </DropdownItem>

                                    <DropdownItem onClick={handleLogOut} key="logout" color="danger">
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                            :
                            <Link to="/login">


                                <button className="bg-white px-[3px] py-[2px] md:px-[12px] md:py-[8px] lg:px-[26px] lg:py-1 rounded-lg md:rounded-lg lg:rounded-xl text-black flex items-center justify-center gap-1 md:gap-2">
                                    <FaRegUser className="text-md" />
                                    <p>Sign In</p>

                                </button>
                            </Link>
                    }

                </div>
            </div>

            <div className='lg:w-[1385px] mx-auto border-1 border-gray-700'>

            </div>


            <div className='mt-3'>
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '100%', }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: '70px' }}>

                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                                <Tab onClick={handleHighlightsNavigate} label="HighLights" {...a11yProps(0)} sx={{ fontSize: '12px' }} />
                                <Tab onClick={handleSpecificationNavigate} label="Specification" {...a11yProps(1)} sx={{ fontSize: '12px' }} />

                            </Tabs>

                        </Box>

                    </Box>
                </ThemeProvider>

            </div>






        </div>
    );
};

export default Navbar;