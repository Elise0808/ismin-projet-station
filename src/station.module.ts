import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import {PaginationService} from "./pagination.service";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [StationController],
  providers: [StationService, PaginationService],
})
export class AppModule {}
