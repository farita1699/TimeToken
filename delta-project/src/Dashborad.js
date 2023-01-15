import { React, useState, useEffect } from 'react';
import { Modal, Label, TextInput } from 'flowbite-react';
import { useSelector } from "react-redux";
import { MdRefresh } from "react-icons/md";
import axios from 'axios';

export default function Dashboard() {

    const { username } = useSelector((state) => state.user);
    const [listImages, setListImages] = useState([])

    function getNFT() {
        axios.post('http://127.0.0.1:8000/get-nft/', {
            username: username,
            })
            .then(function (response) {
                console.log(response.data)
                let listPaths = response.data.nfts.map(data => data.split('/')[4]);
                setListImages(listPaths.map(image => <img className="h-120 w-120 hover:h-136 hover:w-136 mx-10 rounded-lg shadow-xl dark:shadow-gray-800 transition-all duration-500" src={require("./assets/"+image)} alt="image description" />));

            })
            .catch(function (error) {
            console.log(error);
        });
    }

    const [currTab, setCurrTab] = useState('my-nft'); 

    console.log(listImages);

    return (
        <main className='min-h-screen w-full flex'>
            <Modal dismissible={true} show={false}>
                <Modal.Header>
                Terms of Service
                </Modal.Header>
                <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            <div className='w-80 bg-gray-800 flex flex-col items-center' style={{minWidth:'20rem'}}>
                <div className="relative inline-flex items-center justify-center w-24 h-24 mt-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 text-5xl">JL</span>
                </div>
                <h1 className='mt-5 text-3xl text-slate-200 font-medium'>Jerry Wan</h1>
                <hr className="h-px mt-16 mb-8 border-0 bg-gray-700 container" />
                <div className="px-3 py-4 overflow-y-auto container">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" onClick={()=>setCurrTab('info')} className={"flex items-center p-2 text-base text-slate-200 font-normal rounded-lg hover:bg-gray-700 " + (currTab == "info" ? "!text-sky-400" : "text-slate-200")}>
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Personal Information</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={()=>setCurrTab('earnings')} className={'flex items-center p-2 text-base text-slate-200 font-normal rounded-lg hover:bg-gray-700 ' + (currTab == "earnings" ? "!text-sky-400" : "text-slate-200")}>
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Earnings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={()=>setCurrTab('my-nft')} className={"flex items-center p-2 text-base text-slate-200 font-normal rounded-lg hover:bg-gray-700 " + (currTab == "my-nft" ? "!text-sky-400" : "text-slate-200")}>
                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-white text-gray-400" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
                            <span className="ml-4">My NFTs</span>
                            </a>
                        </li>
                    </ul>
                    <hr className="h-px mt-10 mb-8 border-0 bg-gray-700 container" />
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal transition duration-75 rounded-lg  hover:bg-gray-700 text-slate-200">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                            <span className="ml-3">Help</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="flex items-center p-2 text-base font-normal rounded-lg text-slate-200 hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Sign Off</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {currTab == 'info' && <div className='w-full'>
            <h1 className='text-5xl text-center font-medium my-5'>Personal Information</h1>
            <div className='bg-slate-200 w-full flex flex-col items-center justify-center mt-20'>
            <div className='flex flex-col gap-4 bg-white border-slate-400 border-2 p-4 rounded-xl'>
                <div className="flex gap-4">
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="disabledInput1">
                        First Name
                        </Label>
                        <TextInput
                            type="text"
                            id="disabledInput1"
                            placeholder="Jerry"
                            disabled={true}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="disabledInput2">
                            Last Name
                        </Label>
                        <TextInput
                            type="text"
                            id="disabledInput2"
                            placeholder="Wan"
                            disabled={true}
                            readOnly={true}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                        <Label htmlFor="disabledInput1">
                        Email
                        </Label>
                        <TextInput
                            type="text"
                            id="disabledInput1"
                            placeholder="wanj21@mcmaster.ca"
                            disabled={true}
                        />
                </div>
                <div className='flex flex-col gap-2'>
                        <Label htmlFor="disabledInput1">
                        Birthday
                        </Label>
                        <TextInput
                            type="text"
                            id="disabledInput1"
                            placeholder="07/25/2002"
                            disabled={true}
                        />
                </div>
                <div className='flex flex-col gap-2'>
                        <Label htmlFor="disabledInput1">
                        Linkedin
                        </Label>
                        <TextInput
                            type="text"
                            id="disabledInput1"
                            placeholder="https://www.linkedin.com/in/jerry-wan/"
                            disabled={true}
                        />
                </div>
                <div className='flex flex-col gap-2'>
                        <Label htmlFor="disabledInput1">
                        Github
                        </Label>
                        <TextInput
                            type="text"
                            id="disabledInput1"
                            placeholder="https://github.com/farita1699"
                            disabled={true}
                        />
                </div>
                <div className='flex flex-col gap-2'>
                        <Label htmlFor="disabledInput1">
                        Crypto Wallet address
                        </Label>
                        <TextInput
                            type="text"
                            id="disabledInput1"
                            placeholder=""
                            disabled={false}
                        />
                </div>
            </div>
            
            </div>
            </div>}
            {currTab == 'my-nft' && <div className='bg-slate-200 w-full'>
                <div className='absolute right-10 top-15'><MdRefresh className='w-20 h-20 cursor-pointer' onClick={()=>getNFT()} /></div>
                <h1 className='text-5xl text-center font-medium my-5'>My List of NFTs</h1>
                <div className="flex items-center text-sm font-medium text-center w-full bg-slate-400 overflow-x-scroll overflow-y-hidden scrollbar scroll-m-4 scrollbar-track-rounded-3xl scrollbar-thumb-rounded-3xl scrollbar-thumb-sky-600 scrollbar-track-blue-400" style={{height:"41rem"}}>
                    {listImages}
                </div>
            </div>}

        </main> 
    )
}