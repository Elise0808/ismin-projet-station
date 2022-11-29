import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { StationService } from './station.service';
import {Station} from "./Station";
import {StationDto} from "./Station.dto";
import {PaginatedType, PaginationService} from "./pagination.service";

@Controller('stations')
export class StationController {
  constructor(private readonly stationService: StationService, private readonly paginationService: PaginationService) {}

  @Get()
  getAllStations(): Station[] {
    return this.stationService.getAllStations();
  }

  @Get('pagination')
  getAllStationsPaginated(
      @Query('page') page: string,
      @Query('size') size: string,
  ): Station[] | PaginatedType<Station>{
    return this.paginationService.paginatedData(this.stationService.getAllStations(), page, size);
  }

  @Get('/:id')
  getStationInfo(@Param('id') id : string) : Station {
    return this.stationService.getStationInfo(parseInt(id));
  }

  @Post()
  createStation(@Body() stationToCreate: StationDto): Station {
    this.stationService.addStation(stationToCreate);
    return this.stationService.getStationInfo(stationToCreate.id);
  }

  @Post('/search')
  searchStation(@Body() elem : {term:string}){
    return this.stationService.searchStation(elem.term);
  }

  @Put('/:id')
  setFavoriteStation(@Param('id') id : string, @Body() elem: { fav: boolean }) : Station{
    this.stationService.setFavoriteStation(parseInt(id), elem.fav)
    return this.stationService.getStationInfo(parseInt(id));
  }

  @Delete('/:id')
  deleteStation(@Param('id') id : string) : Station{
    return this.stationService.deleteStation(parseInt(id));
  }
}
