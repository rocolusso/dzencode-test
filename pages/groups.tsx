import React from 'react';
import Header from "@/components/header";
import DashNavigation from "@/components/dashNavigation";
import {navLinksGroupsPage} from "@/data";
import PageTitle from "@/components/pageTitle";
import useLoading from "@/hooks/useLoading";
import LoadingWrapper from "@/components/loadingWrapper";
const Groups = () => {
    const {isLoading} = useLoading()
    return (
        <>
            <Header />
            <div>
                <div className={'mx-auto  flex gap-10'}>
                    <DashNavigation navigationLinks={navLinksGroupsPage} />
                    <LoadingWrapper isLoading={isLoading}>
                        <PageTitle title={'Groups'}/>
                    </LoadingWrapper>
                </div>
            </div>
        </>
    );
};

export default Groups;
