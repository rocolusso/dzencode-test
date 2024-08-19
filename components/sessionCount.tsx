import React, {useEffect, useState} from 'react';

const SessionCount = () => {


    const [counts,setCounts] = useState(0)

    const updateStorages = (storageValue:any) => {
        localStorage.setItem('last-session-value', storageValue);
        sessionStorage.setItem('current-session', storageValue);
    };


    const getSessionCount = () => {
        let lastSessionValue:number= +localStorage.getItem('last-session-value');

        if (lastSessionValue === 0 || !lastSessionValue) {
            updateStorages(1);
        } else if (lastSessionValue && sessionStorage.getItem('current-session') === null) {
            lastSessionValue++;

            updateStorages(lastSessionValue);
            setTimeout(()=>{
                localStorage.clear()
                sessionStorage.clear()
            },30000)
        }

        return parseInt(lastSessionValue.toString());

    };



    useEffect(()=>{
        setCounts( getSessionCount())
    },[getSessionCount])

    return (
        <div>sessions: {counts}</div>
    );
};

export default SessionCount;
