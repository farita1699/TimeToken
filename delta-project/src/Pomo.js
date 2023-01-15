import {React, useState, useEffect, useCallback} from 'react';
import { Button } from 'flowbite-react';
import useCountdown from './useCountdown';
import { player } from './util';
import { useDispatch, useSelector } from "react-redux";
import { setMode } from './redux/timerSlice';
import { formatTime } from './helper';
import axios from 'axios';

export default function Pomo() {

    const dispatch = useDispatch();
    const {
      mode,
      modes,
    } = useSelector((state) => state.timer);

    const { username } = useSelector((state) => state.user);

    const [currTimer, setCurrTimer] = useState("pomodoro");
    const [timerON1, setTimerON1] = useState(false);
    const [timerON2, setTimerON2] = useState(false);
    const [timerON3, setTimerON3] = useState(false);


    const { start, stop, reset, timeLeft, progress } = useCountdown({
        minutes: modes[mode].time,
        onStart: () => {
            console.log("Start timer");
        },
        onStop: () => {
            console.log("Stop timer");
        },
        onComplete: () => {
            axios.get(`http://127.0.0.1:8000/mint`)
            .then(res => { 
                axios.post('http://127.0.0.1:8000/post-nft/', {
                    username: username,
                    path: res.data,
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
        })
        },
    });

    function handleCurrTimerChange(newTime){
        if (newTime == "pomodoro"){
            setCurrTimer("pomodoro");
            jumpTo("pomodoro");
        }

        if (newTime == "short_break"){
            setTimerON2(false);
            setCurrTimer("short_break");
            jumpTo("short_break");
        }

        if (newTime == "long_break"){
            setTimerON3(false);
            setCurrTimer("long_break");
            jumpTo("long_break");
        }
    }

    const handleTimer = () => {
        if (currTimer == "pomodoro"){
            setTimerON1(!timerON1);
            if (timerON1) {
                stop();
            } else {
                start();
            }
        }

        if (currTimer == "short_break"){
            setTimerON2(!timerON2);
            if (timerON2) {
                stop();
            } else {
                start();
            }
        }

        if (currTimer == "long_break"){
            setTimerON3(!timerON3);
            if (timerON3) {
                stop();
            } else {
                start();
            }
        }
    }

    const jumpTo = useCallback(
        (id) => {
          reset();
          setTimerON1(false);
          setTimerON2(false);
          setTimerON3(false);
          dispatch(setMode(id));
        },
        [dispatch, reset]
      );

    return (
        <main className='min-h-screen w-full flex flex-col items-center'>
            <img className={'absolute w-full h-full object-cover transition-opacity duration-1000 ' + (currTimer == "pomodoro" ? "" : "opacity-0")} src='../pomodoro.jpg'/>
            <img className={'absolute w-full h-full object-cover transition-opacity duration-1000 ' + (currTimer == "short_break" ? "" : "opacity-0")} src='../short-break.jpg'/>
            <img className={'absolute w-full h-full object-cover transition-opacity duration-1000 ' + (currTimer == "long_break" ? "" : "opacity-0")} src='../long-break.jpg'/>
            <div className='flex flex-col items-center w-120 h-96 mt-44 absolute'>
                {currTimer == "pomodoro" && <img className='absolute w-24 h-16 left-1/2 transition-opacity' style={{top:'-4rem', zIndex:'2', transform:'translateX(-50%)', left: `${50-progress*0.9/2}%`}} src='../dog.gif'/>}
                {currTimer == "short_break" && <img className='absolute w-24 h-24 left-1/2 transition-opacity' style={{top:'-4rem', zIndex:'2', transform:'translateX(-50%) rotateY(180deg)', left: `${50-progress*0.9/2}%`}} src='../cat.gif'/>}
                {currTimer == "long_break" && <img className='absolute w-28 h-16 left-1/2 transition-opacity' style={{top:'-4rem', zIndex:'2', transform:'translateX(-50%) rotateY(180deg)', left: `${50-progress*0.9/2}%`}} src='../wolf.gif'/>}
            </div>
            <div className='flex flex-col items-center w-120 h-96 bg-gray-700 opacity-80 rounded-3xl mt-44 relative'>
                <div className="flex flex-wrap gap-2 mt-10">
                    <Button.Group>
                        <Button color="gray" onClick={()=>handleCurrTimerChange("pomodoro")}>
                        Pomodoro Timer
                        </Button>
                        <Button color="gray" onClick={()=>handleCurrTimerChange("short_break")}>
                        Short Break
                        </Button>
                        <Button color="gray" onClick={()=>handleCurrTimerChange("long_break")}>
                        Long Break
                        </Button>
                    </Button.Group>
                </div>
                <div className="absolute top-0 w-0 h-1 bg-white" style={{ width: `${progress*0.9}%` }} />
                <h1 className='mt-14 text-slate-200 font-bold text-8xl'>{formatTime(timeLeft)}</h1>
                <div className='flex items-center justify-center gap-16 ml-32 mt-12'>
                    <Button gradientMonochrome="success" className='!rounded-full !w-16 !h-16' onClick={()=>{handleTimer()}}>
                    {timerON1 || timerON2 || timerON3 ? "Stop" : "Start"}
                    </Button>
                    <Button gradientMonochrome="purple" className={'!h-16 !w-16 !rounded-full text-sky-400 transition-opacity ' + (!(timerON1 || timerON2 || timerON3) && "opacity-0")}
                    onClick={()=>jumpTo(currTimer)}>
                    End
                    </Button>
                </div>
            </div>
        </main>
    )
}