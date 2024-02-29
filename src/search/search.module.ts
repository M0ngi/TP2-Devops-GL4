import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { ApiClientModule } from '@api_client/api_client.module';
import { HttpModule } from '@nestjs/axios';
import { AvailableAPIs } from '@api_client/available-apis.enum';
import { AppConfigModule } from '@app_config/config.module';

@Module({
  imports: [HttpModule, AppConfigModule],
  controllers: [SearchController],
  providers: [
    SearchService,
    ApiClientModule.ServiceProvider("suggest", AvailableAPIs.SearchAPI),
  ]
})
export class SearchModule { }
