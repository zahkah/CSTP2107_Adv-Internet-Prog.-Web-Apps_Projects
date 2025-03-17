import { API_URL } from "./constant"
import { Product } from "./types";

export const getProductsList = async (): Promise<Product[]> => {
    return (await fetch(API_URL)).json();
}