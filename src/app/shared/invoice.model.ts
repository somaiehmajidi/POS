export interface Invoice{
    id: number
    date: Date
    amount: number
    paymentAmount: number
    orders: Order[]
    customers?: Customer[]
    payment?: any[]
}
export interface Order{
    id: number
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
        latitude: number
        longitude: number
    }
    imageUrl?: string
}