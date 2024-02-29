import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';
import { GetMatchesOptions } from './dto/get-matches-options.dto';

@Injectable()
export class MatchesService {
  @Inject()
  private readonly apiService: ApiClientService;

  getMatches(options: GetMatchesOptions) {
    return this.apiService.get({
      route: 'matches',
      config: {
        params: {
          ...options,
        }
      }
    })
  }

  getLeagueMatchesFixture(id: number, options: GetMatchesOptions) {
    return this.apiService.get({
      route: 'fixtures',
      config: {
        params: {
          ...options,
          id,
        }
      }
    })
  }
}
