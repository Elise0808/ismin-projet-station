import { Injectable, OnModuleInit } from '@nestjs/common';
import { Station } from './Station';
import { ApiResponse} from "./ApiResponse";
import { readFile } from 'fs/promises';
import { HttpService} from "@nestjs/axios";
import {map, tap} from "rxjs";

@Injectable()
export class StationService implements OnModuleInit {
  private storedStations: Station[] = [];

  constructor(private readonly httpService: HttpService) {}

  async onModuleInit(): Promise<void> {
    await Promise.all([this.loadStationsFromAPI()]);
  }

  private async loadStationsFromFile(): Promise<void> {
    try {
      const data = await readFile('./src/dataset.json');
      this.storedStations = JSON.parse(data.toString());
      this.storedStations.forEach((elem) => (elem.fav = false));
    } catch (error) {
      console.log('Err: ${error}');
    }
  }

  private async loadStationsFromAPI(): Promise<void> {
    this.httpService
      .get<ApiResponse[]>(
         'https://data.iledefrance.fr/api/records/1.0/download/?dataset=prix-des-carburants-j-7&q=&format=json'
        )
      .pipe(
        map((elem) => elem.data),
        tap((apiResponse) => {
          apiResponse.forEach((elem) => {
            let id = this.getStationById(parseInt(elem.fields.id));
              return this.storedStations.push({
                id: parseInt(elem.fields.id),
                address: elem.fields.address,
                city: elem.fields.city,
                brand: elem.fields.brand,
                update: elem.fields.record_timestamp,
                shortage: elem.fields.shortage?.split('/'),
                price_name: elem.fields.fuel?.split('/'),
                price_val: [elem.fields.price_sp95, elem.fields.price_sp98, elem.fields.price_gazole, elem.fields.price_e10, elem.fields.price_e85, elem.fields.price_gplc],
                service: elem.fields.services?.split("/"),
                pc: parseInt(elem.fields.cp),
                lat: elem.fields.geo_point[0],
                long: elem.fields.geo_point[1],
                fav: false,
              });
          });
        }),
      )
      .subscribe();
    console.log(this.storedStations);
  }

  getStationById(id: number): number {
    return this.storedStations.findIndex((station) => station.id === id);
  }

  addStation(station: Station): void {
    if (
      !this.storedStations.some(
        (storedStation) => station.id === storedStation.id,
      )
    ) {
      this.storedStations.push(station);
    }
  }

  getAllStations(): Station[] {
    return this.storedStations.sort((station1, station2) =>
      station1.city.toLowerCase().localeCompare(station2.city.toLowerCase()),
    );
  }

  getStationInfo(id: number): Station {
    const station = this.storedStations.find((station) => station.id === id);
    if (station == null) {
      return null;
    }
    return station;
  }

  searchStation(term: string): Station[] {
    const escapedTerm = term.toLowerCase().trim();

    return this.storedStations.filter((station) => {
      return (
        station.address.toLowerCase().includes(escapedTerm) ||
        station.city.toLowerCase().includes(escapedTerm) ||
        station.price_name.some((name) => name?.toLowerCase().includes(escapedTerm))
      );
    });
  }

  setFavoriteStation(id: number, fav: boolean) {
    const index = this.storedStations.findIndex((station) => station.id === id);
    if (index == null) {
      return null
    }
    this.storedStations[index].fav =fav;
  }

  deleteStation(id: number) {
    const index = this.storedStations.findIndex((station) => station.id === id);
    if (index == null) {
      return null
    }
    this.storedStations.splice(index, 1);
  }

}