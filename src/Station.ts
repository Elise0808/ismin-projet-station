export interface Station {
    id: number;
    address: string;
    city: string;
    price_update: Array<string>;
    price_name: Array<string>;
    price_val: Array<number>;
    service: Array<string>;
    automate24: boolean;
    pc: number;
    lat: number;
    long: number;
    fav: boolean;
}