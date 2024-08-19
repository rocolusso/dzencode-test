import React from 'react';
const PageTitle = ({title}:{title:string}) => {
    return (
        <div className={'p-10'}>
            <h1 className={'font-bold text-[36px]'}>{title}</h1>
        </div>
    );
};

export default PageTitle;
