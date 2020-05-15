export interface Invoice{
    iId: number
    date: Date
    amount: number
    paymentAmount: number
    discount?: number
    orders: Order[]
    customer?: Customer[]
}
export interface Order{
    oId: number
    name: string
    price: number 
    totalPrice: number
    unit: number
}
export interface Customer{
    cId: number
    name: string
    phone: string
    add?: string
    imageUrl?: string
}