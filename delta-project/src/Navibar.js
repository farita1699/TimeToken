import { React, useState} from 'react';
import { Navbar, Dropdown, Avatar, Button, Modal, Label, TextInput, Checkbox } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from './redux/userSlice';
import axios from 'axios';

export default function Navibar() {

    const dispatch = useDispatch();

    const { isLoggedIn, firstname, lastname, email } = useSelector((state) => state.user);

    const [onHome, setOnHome] = useState(true);
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const [createAccount, setCreateAccount] = useState(false);
    const [inputUsername, setInputUsername] = useState(null);
    const [inputPassword, setInputPassword] = useState(null);

    function getUsers(){
        axios.get(`http://127.0.0.1:8000/api/users/`)
        .then(res => { 
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].password == inputPassword && res.data[i].username == inputUsername){
                    dispatch(setLogin(res.data[i]));
                }
            }
        
    })
    }
    
    function handleLogin() {
        setInputUsername(document.getElementById("username").value);
        setInputPassword(document.getElementById("password").value);
        getUsers();
    }

    return (
    <div>
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
            <span className="self-center text-blue-700 text-xl font-semibold whitespace-nowrap dark:text-white">TimeToken</span>
        </Link>
        <div className="flex md:order-2">
            {isLoggedIn && <div>
                <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                        {firstname + " " + lastname}
                        </span>
                        <span className="block truncate text-sm font-medium">
                        {email}
                        </span>
                    </Dropdown.Header>
                    <Link to="/dashboard">
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                    </Dropdown>
            </div>}
            {!isLoggedIn && <div>
                <Button className='w-20 mr-4' onClick={()=>setIsLoginClicked(true)}>
                Login
                </Button>
            </div>
            }
        </div>
        <div className={"items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " + (isLoggedIn ? 'mr-24' : 'mr-12')} id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <Link to="/#" className={"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " + (onHome ? "md:text-blue-700" : "md:text-gray-700")} onClick={()=>setOnHome(true)}>Home</Link>
            </li>
            <li>
                <Link to="/pomodoro" className={"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " + (onHome ? "md:text-gray-700" : "md:text-blue-700")} onClick={()=>setOnHome(false)}>Pomodoro</Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    <Modal
    show={isLoginClicked}
    size="md"
    popup={true}
    onClose={()=>{setIsLoginClicked(false)}}
    >
        <Modal.Header />
        <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {createAccount ? "Create an Account" : "Sign in"}
            </h3>
            <div>
            <div className="mb-2 block">
                <Label
                htmlFor="username"
                value="Your username"
                />
            </div>
            <TextInput
                id="username"
                required={true}
            />
            </div>
            <div>
            <div className="mb-2 block">
                <Label
                htmlFor="password"
                value="Your password"
                />
            </div>
            <TextInput
                id="password"
                type="password"
                required={true}
            />
            </div>
            <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                Remember me
                </Label>
            </div>
            <Link
                to="#"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
                Lost Password?
            </Link>
            </div>
            <div className="w-full">
            <Button onClick={()=>handleLogin()}>
                Log in to your account
            </Button>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{' '}
            <Link
                to="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
                onClick={()=>setCreateAccount(!createAccount)}
            >
                {createAccount ? "Create Account" : "Sign in"}
            </Link>
            </div>
        </div>
        </Modal.Body>
    </Modal>
    </div>
    )
}