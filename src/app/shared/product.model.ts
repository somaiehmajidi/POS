export interface Category {
    id: number
    name: string 
    products: Product[]
}
export interface Product{
    id: number
    name: string
    price: number
    unit: number
    imageUrl: string
}