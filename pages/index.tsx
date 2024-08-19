import Header from "@/components/header";
import {navLinksHomePage} from "@/data";
import DashNavigation from "@/components/dashNavigation";
import {useState} from "react";
import useLoading from "@/hooks/useLoading";
import LoadingWrapper from "@/components/loadingWrapper";
import { useProductsStore } from "@/store";
import useBlockScroll from "@/hooks/useBlockScroll";
import Image from "next/image";



export default function Home() {
  const [onSearch,setOnSearch] = useState('')
    const {isLoading} = useLoading()
    const {productsStore,ordersStore,removeOrder } = useProductsStore((state)=>state)

    useBlockScroll(isLoading)


    return (
    <>
      <Header onSearch={setOnSearch}/>
      <div>

        <div className={'mx-auto  flex gap-10'}>

          <DashNavigation  navigationLinks={navLinksHomePage} />
            <LoadingWrapper isLoading={isLoading}>
                <div className={'mx-auto'}>
                    <h1 className={'uppercase font-bold text-[36px]'}>ORDERS</h1>
                     <ul>
                         {ordersStore.map(order=>(
                             <li key={Math.random()} className={'flex gap-10'}>
                                 <div className={'flex gap-5'}>
                                     <div>Order ID:{order.id}</div>
                                     <div>Title:{order.title}</div>
                                     <div>Date:{order.date}</div>
                                     <div>Description:{order.description}</div>
                                 </div>
                                 <div>
                                  <ul>
                                      {
                                          order.products.map(prod=>
                                              (
                                                  <li key={Math.random() + prod.title} className={'flex gap-10 items-center'}>

                                                      <div>
                                                          <Image src={prod.photo} alt={''} width={100} height={100}/>
                                                          <div>Product ID: {prod.id}</div>
                                                          <div>Title: {prod.title}</div>
                                                          <div>Type: {prod.type}</div>
                                                          <div className={'max-w-[400px]'}>
                                                              Description:
                                                              <p> {prod.specification}</p>
                                                          </div>
                                                      </div>


                                                      <button
                                                          className={'p-2 text-xs text-white bg-red-600 rounded hover:scale-110 duration-300 flex items-center justify-center'}
                                                          onClick={() => removeOrder(order.id)}
                                                      >remove
                                                      </button>
                                                  </li>
                                              )
                                          )
                                      }

                                  </ul>
                                 </div>
                             </li>
                         ))}
                     </ul>
                </div>
            </LoadingWrapper>
        </div>

      </div>
    </>
  );
}
