import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { ApiClientModule } from '@api_client/api_client.module';
import { AppConfigModule } from '@app_config/config.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, AppConfigModule],
  controllers: [TeamsController],
  providers: [
    TeamsService,
    ApiClientModule.ServiceProvider("teams"),
  ]
})
export class TeamsModule { }
