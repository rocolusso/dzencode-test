import React from 'react';
import {useDate} from "@/hooks/useDate";

const DateTime = () => {
    const time = useDate()
    return (
        <div className={'time flex gap-5'}>
            <div>
                <p>{time.date}</p>
            </div>
            <div>
            <p>{time.time}</p>
            </div>
        </div>
    );
};

export default DateTime;
