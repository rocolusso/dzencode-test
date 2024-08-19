import {useEffect} from 'react';

const useBlockScroll = (boolState) => {
    useEffect(()=>{
        const body = document.querySelector('body')
        body.className = boolState ? 'stop-scrolling' :''
    },[boolState])

    return {};
};

export default useBlockScroll;
