export interface Station {
    id: number;
    address: string;
    city: string;
    brand: string;
    update: string;
    shortage: Array<string>;
    price_name: Array<string>;
    price_val: Array<number>;
    service: Array<string>;
    pc: number;
    lat: number;
    long: number;
    fav: boolean;
}