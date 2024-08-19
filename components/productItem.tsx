import React, {useState} from 'react';
import Image from "next/image";
import {useProductsStore} from "@/store";
import useBlockScroll from "@/hooks/useBlockScroll";

interface productItem {
    id: number,
    serialNumber: number,
    isNew: number,
    repair:number,
    photo: string,
    title: string,
    type: string,
    specification: string,
    guarantee: {
        start: string,
        end: string
    },
    price: {
        value: number,
        symbol: string,
        isDefault: number
    }[],
    order: number,
    date: string
}

const ProductItem = (product:productItem) => {
    const [isActive,setIsActive] = useState(false)

    const { removeProduct } = useProductsStore((state)=>state)

    useBlockScroll(isActive)

    return (
        <li>


            {
                isActive &&

                <div className={'absolute z-10 bg-gray-100 bg-opacity-80  top-0 left-0 min-h-screen min-w-full'}>


                    <div className={'relative  border min-w-full min-h-screen flex justify-center items-center'}>

                        <div className={`relative  shadow-2xl p-10 rounded-xl bg-white`}>
                            <div className={'absolute group -top-10 -right-10'}>
                                <button className={'bg-black text-white p-3 group-hover:scale-110 duration-300 group-hover:animate-pulse'} onClick={()=> setIsActive(false)}>Close</button>
                            </div>
                            <div className={'font-bold text-[30px]'}>
                                {product.title}
                            </div>
                            <div>
                                <span className={'font-bold'}>Серийный номер</span>
                                <p className={'text-xs'}>{product.serialNumber}</p>
                            </div>
                            <div>
                                <Image
                                    src={product.photo}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                />
                            </div>

                            <div className={'flex gap-10'}>
                                <div className={'self-center max-w-[60px]'}>
                                    <p className={`p-1 text-xs ${product.repair ? "bg-green-400" : "bg-yellow-500"} duration-300 text-center rounded`}
                                    >{product.repair ? "available" : "under repair"}
                                    </p>
                                </div>

                                <div>
                                    <span className={'font-bold'}>Тип</span>
                                    <div>{product.type}</div>
                                </div>
                                <div>
                                    <span className={'font-bold'}>Состояние</span>
                                    <div>{product.isNew ? "New" : "Used"}</div>
                                </div>

                                <div className={'max-w-[400px]'}>
                                    <span className={'font-bold'}>Описание</span>
                                    <p className={'text-xs'}>{product.specification}</p>
                                </div>
                                <div>
                                    <span className={'font-bold w-[250px]'}>Гарантия</span>
                                    <p className={'text-xs'}>с :{product.guarantee.start}</p>
                                    <p className={'text-xs'}>по: {product.guarantee.end}</p>
                                </div>
                                <div>
                                    <span className={'font-bold'}>Цена</span>
                                    <div>
                                        <ul>
                                            {product.price.map(price => (
                                                <li key={price.value} className={'flex gap-3'}>
                                                    <div className={'flex '}>
                                                        <div>{price.value}</div>
                                                    </div>
                                                    <div className={'flex '}>
                                                        <div>{price.symbol}</div>
                                                    </div>

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            }


            <div


                className={'hover:border-green-400  border-transparent border-2 text-left  group  hover:translate-x-5  duration-300 w-[1400px] pr-10 p-3 mb-3 flex  gap-5 rounded-xl bg-gray-50 shadow-xl '}


            >
                <div
                    className={`w-[8px] h-[8px] border-none ${product.repair ? "bg-green-400" : "bg-yellow-500"}  border rounded-full self-center`}/>

                <div>
                    <Image
                        src={product.photo}
                        alt={product.title}
                        width={100}
                        height={100}
                    />
                </div>
                <div className={'max-w-[200px]'}>
                    <span className={'font-bold '}>Название</span>
                    <p className={'text-xs'}>{product.title}</p>
                    <div>
                        <span className={'font-bold'}>Серийный номер</span>
                        <p className={'text-xs'}>{product.serialNumber}</p>
                    </div>
                </div>

                <div className={'self-center max-w-[60px]'}>
                    <p className={`p-1 text-xs ${product.repair ? "bg-green-400" : "bg-yellow-500"} duration-300 text-center rounded`}
                    >{product.repair ? "available" : "under repair"}
                    </p>
                </div>

                <div>
                    <span className={'font-bold'}>Тип</span>
                    <div>{product.type}</div>
                </div>
                <div>
                    <span className={'font-bold'}>Состояние</span>
                    <div>{product.isNew ? "New" : "Used"}</div>
                </div>

                <div className={'max-w-[250px]'}>
                    <span className={'font-bold'}>Описание</span>
                    <p className={'text-xs'}>{product.specification}</p>
                </div>
                <div>
                    <span className={'font-bold w-[250px]'}>Гарантия</span>
                    <p className={'text-xs'}>с :{product.guarantee.start}</p>
                    <p className={'text-xs'}>по: {product.guarantee.end}</p>
                </div>
                <div>
                    <span className={'font-bold'}>Цена</span>
                    <div>
                        <ul>
                            {product.price.map(price => (
                                <li key={price.value} className={'flex gap-3'}>
                                    <div className={'flex '}>
                                        <div>{price.value}</div>
                                    </div>
                                    <div className={'flex '}>
                                        <div>{price.symbol}</div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={'flex gap-2'}>
                    <div className={'flex items-center hover:scale-110 duration-300'}>
                        <button
                            className={'p-2 text-xs text-white bg-black rounded'}
                            onClick={() => setIsActive(true)}

                        >more
                        </button>
                    </div>

                    <div className={'flex items-center '}>
                        <button className={'p-2 text-xs text-white bg-red-600 rounded hover:scale-110 duration-300'} onClick={() => {
                            removeProduct(product.id)
                        }}>remove
                        </button>
                    </div>
                </div>

            </div>


        </li>
    );
};

export default ProductItem;
