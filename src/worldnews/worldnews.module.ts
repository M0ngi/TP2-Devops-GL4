import { Module } from '@nestjs/common';
import { WorldnewsController } from './worldnews.controller';
import { WorldnewsService } from './worldnews.service';
import { AppConfigModule } from '@app_config/config.module';
import { HttpModule } from '@nestjs/axios';
import { ApiClientModule } from '@api_client/api_client.module';

@Module({
  imports: [HttpModule, AppConfigModule],
  controllers: [WorldnewsController],
  providers: [
    WorldnewsService,
    ApiClientModule.ServiceProvider("worldnews"),
  ]
})
export class WorldnewsModule { }
