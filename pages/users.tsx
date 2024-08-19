import React from 'react';
import Header from "@/components/header";
import DashNavigation from "@/components/dashNavigation";
import {navLinksUsersPage} from "@/data";
import PageTitle from "@/components/pageTitle";
import useLoading from "@/hooks/useLoading";
import LoadingWrapper from "@/components/loadingWrapper";
const Users = () => {
    const {isLoading} = useLoading()
    return (
        <>
            <Header />
            <div>
                <div className={'mx-auto  flex gap-10'}>
                    <DashNavigation navigationLinks={navLinksUsersPage} />
                    <LoadingWrapper isLoading={isLoading}>
                        <PageTitle title={'Users'}/>
                    </LoadingWrapper>
                </div>
            </div>
        </>
    );
};

export default Users;
