import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '@app_config/config.module';
import { ApiClientModule } from '@api_client/api_client.module';

@Module({
  imports: [HttpModule, AppConfigModule],
  controllers: [MatchesController],
  providers: [
    MatchesService,
    ApiClientModule.ServiceProvider(""),
  ]
})
export class MatchesModule { }
