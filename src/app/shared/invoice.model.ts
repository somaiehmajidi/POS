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
    discount?: number
}
export interface Customer{
    id: number
    firstName: string
    lastName?: string
    phone: string
    email?: string
    add?: {
        state: string
        city: string
        street: string
        postcode?: number
    }
    location?: {
        latitude: string
        longitude: string
    }
    imageUrl?: string
}