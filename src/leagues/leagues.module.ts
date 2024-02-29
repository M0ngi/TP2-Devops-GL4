import { Module } from '@nestjs/common';
import { LeaguesController } from './leagues.controller';
import { LeaguesService } from './leagues.service';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '@app_config/config.module';
import { ApiClientModule } from '@api_client/api_client.module';

@Module({
  imports: [HttpModule, AppConfigModule],
  controllers: [LeaguesController],
  providers: [
    LeaguesService,
    ApiClientModule.ServiceProvider("leagues"),
  ]
})
export class LeaguesModule { }
