export interface ApiResponse {
    datasetid: string;
    recordid: string;
    fields: ApiFields;
    geometry: ApiGeometry;
    record_timestamp: string;
}

export interface ApiFields {
    geo_point: number[];
    city: string;
    automate24_24: string;
    name: string;
    timetable: string;
    services: string;
    brand: string;
    pop: string;
    shortage: string;
    cp: string;
    id: string;
    fuel: string;
    address: string;
    price_sp95: number;
    price_sp98: number;
    price_gazole: number;
    price_e10: number;
    price_e85: number;
    price_gplc: number;
    update : string;
}

export interface ApiGeometry {
    type: string;
    coordinates: number[];

}