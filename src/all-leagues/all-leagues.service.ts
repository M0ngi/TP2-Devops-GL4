import { ApiClientService } from '@api_client/api_client.service';
import { Inject, Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AllLeaguesService {
  @Inject()
  private readonly apiService: ApiClientService;

  getAll() {
    return this.apiService.get()
  }

  getPopular() {
    return this.apiService.get().pipe(
      map((res) => {
        return res.popular
      })
    )
  }

  getByCountry() {
    return this.apiService.get().pipe(
      map((res) => {
        return [
          ...res.international,
          ...res.countries,
        ]
      })
    )
  }
}
