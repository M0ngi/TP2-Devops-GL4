import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '@app_config/config.module';
import { ApiClientModule } from '@api_client/api_client.module';

@Module({
  imports: [HttpModule, AppConfigModule],
  providers: [
    TransfersService,
    ApiClientModule.ServiceProvider("transfers"),
  ],
  controllers: [TransfersController]
})
export class TransfersModule { }
