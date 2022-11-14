import {Controller, Get, Param} from '@nestjs/common';
import { StationService } from './station.service';
import {Station} from "./Station";

@Controller('stations')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get()
  getAllStations( ): Station[] {
    return this.stationService.getAllStations();
  }

  @Get('/:id')
  getStationInfo(@Param('id') id : number) : Station {
    return this.stationService.getStationInfo(id);
  }
}
