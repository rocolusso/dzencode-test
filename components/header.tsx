import React, {ChangeEvent, useEffect, useState} from 'react';
import dynamic from "next/dynamic";
import SessionCount from "@/components/sessionCount";



const Date = dynamic(import('./DateTime'),{
    ssr:false,
})

const Header = ({onSearch}:{onSearch?:any}) => {


    return (
        <header className={'border-b shadow-xl'}>
            <div className={'mx-auto max-w-[1280px] '}>
              <div className={'flex justify-between items-center py-5'}>
                  <div className={'font-bold uppercase text-[30px]'}>
                      LOGO
                  </div>
                  <div>
                      <input
                          onChange={(e:ChangeEvent<HTMLInputElement>)=>onSearch(e.target.value)}
                          placeholder={'Поиск...'}
                          className={'w-[700px] rounded bg-gray-100 px-5 py-3'}
                      />
                  </div>
                  <SessionCount/>
                  <Date/>
              </div>
            </div>
        </header>
    );
};

export default Header;
