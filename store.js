import { create } from 'zustand'

const initProducts = [
    {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        repair: 1,
        photo: '/assets/images/products/item1.png',
        title: 'PHILIPS 22 inch Class Thin Full HD (1920 x 1080) Monitor',
        type: 'Monitors',
        specification: '\n' +
            'CRISP CLARITY: This 22 inch class (21.5″ viewable) Philips V line monitor delivers crisp Full HD 1920x1080 visuals. Enjoy movies, shows and videos with remarkable detail',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 2,
        serialNumber: 1234,
        isNew: 0,
        repair: 0,
        photo: '/assets/images/products/item2.png',
        title: 'SAMSUNG 27" T35F Series FHD 1080p Computer Monitor',
        type: 'Monitors',
        specification: 'ALL-EXPANSIVE VIEW: The 3-sided borderless display brings a clean and modern aesthetic to any working environment. In a multi-monitor setup, the displays line up seamlessly for a virtually gapless view without distractions.Aspect ratio:16:9.Response time:5.0 milliseconds',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2017-06-29 12:09:33'
    }
]
export const useProductsStore = create((set) => ({
    productsStore: initProducts,
    removeProduct: (id) => set((state) => ({ productsStore: state?.productsStore.filter(item=>item.id !== id) })),

    ordersStore: [
        {
            id: 1,
            title: 'Order 1',
            date: '2017-06-29 12:09:33',
            description: 'desc',
            products: initProducts.filter(i=>i.order === 1)
        },
        {
            id: 2,
            title: 'Order 2',
            date: '2017-06-29 12:09:34',
            description: 'desc',
            products: initProducts.filter(i=>i.order === 2)
        }
    ],

    removeOrder: (id) => set((state) => ({  ordersStore: state?. ordersStore.filter(item=>item.id !== id) })),


}))


