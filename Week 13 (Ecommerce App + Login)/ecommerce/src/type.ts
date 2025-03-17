
export type UserCredentials = {
    email: string;
    password: string;
    fullName?: string;
    age?: number;
    dob?: Date;
    userId?: string;
}


export type Product = {
    id?: number;
    category: string;
    title: string;
    price: number;
    description: string;
    image: string;
    rating?: Rating;
    amount?: number;
    authorId?: string;
}

export type Rating = {
    count: number;
    rate: number;
}