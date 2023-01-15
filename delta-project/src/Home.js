import React from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
    <main className='min-h-screen w-full flex items-center justify-center'>
        <img src='../background2.jpg' className='w-full h-full absolute opacity-50'></img>
        <Link className="max-w-sm z-10" to="/pomodoro">
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            className='mb-32'
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            TimeToken
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            TimeToken is a new-age productivity Pomodoro-timer that rewards you with real blockchain-minted NFTs when you stay focused!
            </p>
        </Card>
        </Link>
    </main>
    )
}