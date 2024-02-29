import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';
import { SearchOptions } from './dto/search-options.dto';

@Injectable()
export class SearchService {
  @Inject()
  private readonly apiService: ApiClientService;

  search(options: SearchOptions) {
    return this.apiService.get({
      config: {
        params: {
          ...options,
        }
      }
    })
  }
}
