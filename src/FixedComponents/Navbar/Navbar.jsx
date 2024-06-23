// import { Tab, Tabs } from "@nextui-org/react";

import { IoReorderThreeOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    const location=useLocation();
    useEffect(()=>{
        console.log(location);
    },[location])

    
    

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
    const [value, setValue] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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


    return (
        <div className="text-white">
            <div className="navbar bg-black  lg:px-[80px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="flex  items-center">
                        <div className="h">
                            <IoReorderThreeOutline className="text-white h-[42px] w-[42px] mt-[2px]" />
                        </div>
                        <a className="btn btn-ghost text-2xl text-white">TAGFREE</a>
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
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

            <div className='lg:w-[1390px] mx-auto text-gray-300'>

            </div>

            <div className='mt-3'>
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '100%', }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: '70px' }}>
                            
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab onClick={handleHighlightsNavigate} label="Item One" {...a11yProps(0)} sx={{ fontSize: '14px' }} />
                                <Tab onClick={handleSpecificationNavigate} label="Item Two" {...a11yProps(1)} sx={{ fontSize: '14px' }} />
                                <Tab label="Item Three" {...a11yProps(2)} sx={{ fontSize: '14px' }} />
                            </Tabs>
                        </Box>

                    </Box>
                </ThemeProvider>

            </div>

           


        </div>
    );
};

export default Navbar;