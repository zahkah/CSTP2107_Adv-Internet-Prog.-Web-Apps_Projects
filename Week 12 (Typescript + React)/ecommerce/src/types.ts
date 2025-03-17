
export type Product = {
    id: number;
    category: string;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: Rating;
    amount: number;
}

export type Rating = {
    count: number;
    rate: number;
}