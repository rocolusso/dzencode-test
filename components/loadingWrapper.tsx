import React, {ReactNode} from 'react';

const LoadingWrapper = ({children,isLoading}:{children:ReactNode,isLoading:boolean}) => {
    return (
        <div className={isLoading ? 'blur opacity-20 translate-x-10 translate-y-10 duration-300 ' : ""}>
            {children}
        </div>
    );
};

export default LoadingWrapper;
