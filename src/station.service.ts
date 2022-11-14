import { Injectable, OnModuleInit } from '@nestjs/common';
import { Station } from './Station';
import { readFile } from 'fs/promises';

@Injectable()
export class StationService implements OnModuleInit {
  private storedStations: Station[] = [];

  constructor() {}

  async onModuleInit(): Promise<void> {
    await Promise.all([this.loadStationFromFile()]);
  }

  private async loadStationFromFile(): Promise<void> {
    try {
      const data = await readFile('./src/dataset.json');
      this.storedStations = JSON.parse(data.toString());
      this.storedStations.forEach((elem) => (elem.fav = false));
    } catch (error) {
      console.log('Err: ${error}');
    }
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
      throw new Error(`No station with id ${id}`);
    }
    return station;
  }

  setFavoriteStation(id: number, fav: boolean) {
    const index = this.storedStations.findIndex((station) => station.id === id);
    if (!index) {
      throw new Error(`No station with id ${id}`);
    }
    this.storedStations[index].fav =fav;
  }

}
