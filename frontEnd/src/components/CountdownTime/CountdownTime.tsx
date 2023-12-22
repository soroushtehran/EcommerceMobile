import React, { useState, useEffect } from 'react'

interface CountdownTimeProps {
    targetTime: Date;
}

export default function CountdownTime({ targetTime }: CountdownTimeProps) {

    const [time, setTime] = useState({
        Days: '00',
        Hours: '00',
        Minutes: '00',
        Secconds: '00',
    });
    const getShowTime = (time: number): string => time < 10 ? `0${time}` : `${time}`;
    const getRoundTime = (sumNumber: number): string => getShowTime(Math.floor(sumNumber));

    function getRemaningOfferTime(targetTime: Date) {
        const nowDate = new Date();
        const diff = +targetTime - +nowDate;

        const days = 1000 * 60 * 60 * 24;
        const remainingDays = getRoundTime(diff / days);

        const hours = 1000 * 60 * 60;
        const remainingHours = getRoundTime((diff % days) / hours);

        const minutes = 1000 * 60;
        const remainingMinutes = getRoundTime((diff % hours) / minutes);

        const secconds = 1000;
        const remainingSecconds = getRoundTime((diff % minutes) / secconds);

        // const result = `${remainingDays} : ${remainingHours} : ${remainingMinutes} : ${remainingSecconds}`;

        // const isFinish = diff <= 0;
        setTime({
            Days: remainingDays,
            Hours: remainingHours,
            Minutes: remainingMinutes,
            Secconds: remainingSecconds,
        });

    }

    useEffect(() => {
        const countdownTime = setInterval(() => {
            getRemaningOfferTime(targetTime);
        }, 1000)

        return () => {
            clearInterval(countdownTime)
        }
    })

    const { Days, Hours, Minutes, Secconds, } = time;
    return (
        <div className='basic-flex w-full absolute top-1.5 font-DanaDemiBold text-white'>
            {/* <div> */}
            <span className='bg-sky-500 rounded-full p-2 '> تخفیف </span>
            <div className='flex flex-row child:min-w-max child:p-1 child:rounded-full child:text-sky-500  child:w-7 child:text-center'>
                <span> {Secconds} :</span>
                <span> {Minutes} :</span>
                <span> {Hours} :</span>
                <span> {Days} </span>
            </div>
        </div>
        // </div>
    )
}
