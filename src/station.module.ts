import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import {PaginationService} from "./pagination.service";

@Module({
  imports: [],
  controllers: [StationController],
  providers: [StationService, PaginationService],
})
export class AppModule {}
