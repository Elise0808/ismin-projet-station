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

  getAllStations(): Station[] {
    return this.storedStations.sort((station1, station2) =>
        station1.city.toLowerCase().localeCompare(station2.city.toLowerCase()),
    );
  }

}
