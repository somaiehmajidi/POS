export interface Factor {
    id: number,
    invoiceId: number,
    total: number,
    orders: [],
    paymentLines: Payment[],
    change?: number
}
export interface Payment{
    id: number,
    type: string,
    due: number,
    tendered: number,
    change: number
}