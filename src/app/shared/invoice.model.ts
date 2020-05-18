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
    id: number
    name: string
    phone: string
    email?: string
    add?: {
        state: string
        city: string
        street: string
        postcode?: number
    }
    imageUrl?: string
}