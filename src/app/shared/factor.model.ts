export interface Factor {
    id: number,
    invoiceId: number,
    total: number,
    paymentLines: Payment[] 
}
export interface Payment{
    id: number,
    type: string,
    due: number,
    tendered: number,
    change?: number
}