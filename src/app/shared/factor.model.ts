export interface Factor {
    id: number,
    invoiceId: number,
    total: number,
    paymentLines: Payment[] 
}
export interface Payment{
    type: string,
    due: number,
    tendered: number,
    change?: number
}