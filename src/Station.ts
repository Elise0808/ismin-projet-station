export interface Station {
    id: number;
    address: string;
    city: string;
    pc: number;
    brand: string;
    update: string;
    shortage: Array<string>;
    price_name: Array<string>;
    price_val: Array<number>;
    service: Array<string>;
    automate24_24: string;
    lat: number;
    long: number;
    fav: boolean;
}