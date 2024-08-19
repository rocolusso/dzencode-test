import React from 'react';
import ProductItem from "@/components/productItem";
const DashProductList = ({products}:{products:{
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
    }[]}) => {
    return (
        <div className={'list py-10 pr-10 '}>
            <ul>
                {
                    products.map(product =>
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            repair={product.repair}
                            serialNumber={product.serialNumber}
                            isNew={product.isNew}
                            photo={product.photo}
                            title={product.title}
                            type={product.type}
                            specification={product.specification}
                            guarantee={product.guarantee}
                            price={product.price}
                            order={product.order}
                            date={product.date}
                        />
                    )
                }
            </ul>
        </div>
    );
};

export default DashProductList;
