export interface Station {
    id: number;
    address: string;
    city: string;
    pc: number;
    brand: string;  //compagnie de la station
    update: string;  //date de la dernière mise à jour
    shortage: Array<string>; //liste des produits en rupture
    price_name: Array<string>; //liste des produits vendus
    price_val: Array<number>; //liste des prix des produits vendus
    service: Array<string>; //liste des services proposés
    automate24_24: string; //automate 24/24h
    lat: number;
    long: number;
    fav: boolean; //favoris ou non
}