import React from 'react';
import Link from "next/link";
const DashNavigationLink = ({name,url,isActive}:{name:string,url:string,isActive:number}) => {
    return (
        <li className={isActive
            ? 'p-3 hover:scale-105  hover:border-b-green-400 border-transparent border-b-green-400 border-2 duration-300'
            : 'p-3 hover:scale-105  hover:border-b-green-400 border-transparent border-2 duration-300'}
        >
            <Link href={url} className={'font-bold   bg-gray-50 rounded '}>{name}</Link>
        </li>
    );
};

export default DashNavigationLink;
