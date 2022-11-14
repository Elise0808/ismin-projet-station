import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { StationService } from './station.service';
import {Station} from "./Station";
import {StationDto} from "./Station.dto";

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

  @Post()
  createStation(@Body() stationToCreate: StationDto): Station {
    this.stationService.addStation(stationToCreate);
    return this.stationService.getStationInfo(stationToCreate.id);
  }

  @Put('/:id')
  setFavoriteStation(@Param('id') id : number, @Body() elem: { fav: boolean }) : Station{
    this.stationService.setFavoriteStation(id, elem.fav)
    return this.stationService.getStationInfo(id);
  }
}
