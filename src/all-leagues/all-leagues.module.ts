import { Module } from '@nestjs/common';
import { AllLeaguesController } from './all-leagues.controller';
import { AllLeaguesService } from './all-leagues.service';
import { AppConfigModule } from '@app_config/config.module';
import { HttpModule } from '@nestjs/axios';
import { ApiClientModule } from '@api_client/api_client.module';

@Module({
  imports: [HttpModule, AppConfigModule],
  controllers: [AllLeaguesController],
  providers: [
    AllLeaguesService,
    ApiClientModule.ServiceProvider("allLeagues"),
  ]
})
export class AllLeaguesModule { }
