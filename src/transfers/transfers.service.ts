import { Inject, Injectable } from '@nestjs/common';
import { GetTransfersOptions } from './dto/get-transfers-options.dto';
import { ApiClientService } from '@api_client/api_client.service';

@Injectable()
export class TransfersService {
  @Inject()
  private readonly apiService: ApiClientService;

  async getTransfers(options: GetTransfersOptions) {
    return this.apiService.get({
      config: {
        params: {
          ...options,
        }
      }
    })
  }
}
