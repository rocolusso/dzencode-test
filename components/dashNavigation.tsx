import React from 'react';
import Image from "next/image";
import DashNavigationLink from "@/components/dashNavigationLink";
const DashNavigation = ({navigationLinks}:{navigationLinks:{
    name:string,
    url:string,
    isActive:number,
    }[],

}) => {
    return (
        <div className={'sidebar-nav  shadow-2xl h-screen flex flex-col items-center justify-center'}>
            <div className={'pb-10'}>
                <Image src={'/assets/images/user.png'} alt={''} width={100} height={100}/>
            </div>
            <ul className={'flex items-center w-[250px] justify-center flex-col'}>
                {navigationLinks.map(link=>(
                    <DashNavigationLink
                        key={link.name}
                        name={link.name}
                        url={link.url}
                        isActive={link.isActive}
                    />
                ))}
            </ul>
        </div>
    );
};

export default DashNavigation;
