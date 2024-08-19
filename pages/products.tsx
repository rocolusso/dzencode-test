
import Header from "@/components/header";
import {navLinksProductsPage} from "@/data";
import DashNavigation from "@/components/dashNavigation";
import DashProductList from "@/components/dashProductList";
import {useState} from "react";
import useLoading from "@/hooks/useLoading";
import LoadingWrapper from "@/components/loadingWrapper";
import {useProductsStore} from "@/store";
import useBlockScroll from "@/hooks/useBlockScroll";

export default function Home() {
    const [onSearch,setOnSearch] = useState('')
    const {isLoading} = useLoading()

    const {productsStore, removeProduct } = useProductsStore((state)=>state)

    useBlockScroll(isLoading)


    return (
        <>
            <Header onSearch={setOnSearch}/>
            <div>
                <div className={'mx-auto  flex gap-10'}>
                  <DashNavigation navigationLinks={navLinksProductsPage} />

                    <LoadingWrapper isLoading={isLoading}>

                        <DashProductList products={
                            onSearch
                                ? productsStore.filter(i=>i.title.toLowerCase().includes(onSearch))
                                : productsStore
                        }/>
                    </LoadingWrapper>

                </div>
            </div>
        </>
    );
}
