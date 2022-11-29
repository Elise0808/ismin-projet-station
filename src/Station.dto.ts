import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsArray } from "class-validator";

export class StationDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly address: string;

    @IsNotEmpty()
    @IsString()
    readonly city: string;

    @IsNotEmpty()
    @IsString()
    readonly brand: string;

    @IsNotEmpty()
    @IsString()
    readonly update: string;

    @IsNotEmpty()
    @IsArray()
    readonly shortage: Array<string>;

    @IsNotEmpty()
    @IsArray()
    readonly price_name: Array<string>;

    @IsNotEmpty()
    @IsArray()
    readonly price_val: Array<number>;

    @IsNotEmpty()
    @IsArray()
    readonly service: Array<string>;

    @IsNotEmpty()
    @IsNumber()
    readonly pc: number;

    @IsNotEmpty()
    @IsNumber()
    readonly long: number;

    @IsNotEmpty()
    @IsNumber()
    readonly lat: number;

    fav: boolean;

    constructor(id: number, address: string, city: string, update: string, shortage: Array<string>, price_name: Array<string>, price_val: Array<number>, service: Array<string>, pc: number, long: number, lat: number) {
        this.id = id;
        this.address = address;
        this.city = city;
        this.update = update;
        this.price_name = price_name;
        this.price_val = price_val;
        this.service = service;
        this.pc = pc;
        this.long = long;
        this.lat = lat;
        this.fav = false;
    }
}