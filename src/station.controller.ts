import {Controller, Get} from '@nestjs/common';
import { StationService } from './station.service';
import {Station} from "./Station";

@Controller('stations')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get()
  getAllStations( ): Station[] {
    return this.stationService.getAllStations();
  }
}
