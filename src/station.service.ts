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
    await Promise.all([this.loadStationsFromFile()]);
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
        'https://data.opendatasoft.com/api/records/1.0/download/?dataset=prix-carburants-fichier-quotidien-test-ods%40opendatamef&q=&format=json&refine.ville=Aix-en-Provence',
      )
      .pipe(
        map((elem) => elem.data),
        tap((apiResponse) => {
          apiResponse.forEach((elem) => {
            let id = this.getStationById(parseInt(elem.fields.id));
            if (id === -1) {
              return this.storedStations.push({
                id: parseInt(elem.fields.id),
                address: elem.fields.adresse,
                city: elem.fields.ville,
                price_update: elem.fields.prix_maj,
                price_name: [elem.fields.prix_nom],
                price_val: [elem.fields.prix_valeur],
                service: elem.fields.services_service?.split("//"),
                automate24: elem.fields.horaires_automate_24_24,
                pc: parseInt(elem.fields.cp),
                lat: elem.fields.geom[0],
                long: elem.fields.geom[1],
                fav: false,
              });
            }
            else {
              this.storedStations[id].price_name.push(elem.fields.prix_nom);
              this.storedStations[id].price_val.push(elem.fields.prix_valeur);
            }
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
    if (!station) {
      return null;
    }
    return station;
  }

  searchStation(term: string): Station[] {
    const escapedTerm = term.toLowerCase().trim();

    return this.storedStations.filter((station) => {
      return (
        station.address.toLowerCase().includes(escapedTerm) ||
        station.city.toLowerCase().includes(escapedTerm)
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

}