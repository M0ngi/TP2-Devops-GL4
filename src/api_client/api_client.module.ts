import { Global, Module } from '@nestjs/common';
import { ApiClientService } from './api_client.service';
import { AppConfigModule } from '@app_config/config.module';
import { ConfigService } from '@app_config/config.service';
import { HttpService } from '@nestjs/axios';
import { AvailableAPIs } from './available-apis.enum';

@Global()
@Module({
  imports: [AppConfigModule]
})
export class ApiClientModule {
  static ServiceProvider(route: string, apiType: AvailableAPIs = AvailableAPIs.BaseAPI) {
    return {
      useFactory: (configService: ConfigService, httpService: HttpService) => {
        const miscConfig = configService.getMiscConfig();

        if (apiType == AvailableAPIs.BaseAPI)
          return new ApiClientService(route, httpService, miscConfig.baseApi);

        if (apiType == AvailableAPIs.SearchAPI)
          return new ApiClientService(route, httpService, miscConfig.searchApi);

        throw new Error("Unknown API type.")
      },
      provide: ApiClientService,
      inject: [ConfigService, HttpService]
    }
  }
}
