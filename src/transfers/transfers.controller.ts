import { Controller, Get, Inject } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { GetTransfersOptions } from './dto/get-transfers-options.dto';
import { GetTransfersOptionsDeco } from './decorators/search-transfers.decorator';

@Controller('transfers')
export class TransfersController {
  @Inject() private leaguesService: TransfersService

  @Get()
  getTransfers(@GetTransfersOptionsDeco() options: GetTransfersOptions) {
    return this.leaguesService.getTransfers(options);
  }
}
