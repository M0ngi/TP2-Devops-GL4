import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';
import { GetTeamOptions } from './dto/get-team-options.dto';

@Injectable()
export class TeamsService {
  @Inject()
  private readonly apiService: ApiClientService;

  async getTeam(id: number, options: GetTeamOptions) {
    return this.apiService.get({
      config: {
        params: {
          id,
          ...options,
        }
      }
    })
  }
}
