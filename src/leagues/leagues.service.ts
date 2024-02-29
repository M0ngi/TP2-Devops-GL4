import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';
import { GetLeagueOptions } from './dto/get-league-options.dto';
import { map } from 'rxjs';
// import Fotmob from 'fotmob';

@Injectable()
export class LeaguesService {
  @Inject()
  private readonly apiService: ApiClientService;

  async getLeague(id: number, options: GetLeagueOptions) {
    return this.apiService.get({
      config: {
        params: {
          id,
          ...options,
        }
      }
    })
  }

  async getLeagueOverview(id: number, options: GetLeagueOptions) {
    return this.apiService.get({
      config: {
        params: {
          id,
          ...options,
        }
      }
    }).pipe(
      map((res) => res.overview)
    )
  }

  async getLeagueTable(id: number, options: GetLeagueOptions) {
    return this.apiService.get({
      config: {
        params: {
          id,
          ...options,
        }
      }
    }).pipe(
      map((res) => res.table)
    )
  }

  async getLeaguePlayoff(id: number, options: GetLeagueOptions) {
    return this.apiService.get({
      config: {
        params: {
          id,
          ...options,
        }
      }
    }).pipe(
      map((res) => res.playoff)
    )
  }

  async getLeagueMatches(id: number, options: GetLeagueOptions) {
    return this.apiService.get({
      config: {
        params: {
          id,
          ...options,
        }
      }
    }).pipe(
      map((res) => res.matches)
    )
  }

  async getLeagueStats(id: number, options: GetLeagueOptions) {
    return this.apiService.get({
      config: {
        params: {
          id,
          ...options,
        }
      }
    }).pipe(
      map((res) => res.stats)
    )
  }
}
