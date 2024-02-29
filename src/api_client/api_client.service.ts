import { Injectable } from '@nestjs/common';
import { ConfigService } from '@app_config/config.service';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { GetHttpAction, PatchHttpAction, PostHttpAction } from './types';
import { AvailableAPIs } from './available-apis.enum';

@Injectable()
export class ApiClientService {
  constructor(
    private route: string,
    private httpService: HttpService,
    private apiLink: string,
  ) {
  }

  get<T = any>(opts?: GetHttpAction): Observable<any> {
    const { url, config, route } = opts ?? {};
    return this.httpService.get<any>(`${this.apiLink}/${route ?? this.route}/${url ?? ''}`, config).pipe(
      map(res => {
        return res.data
      })
    )
  }

  post<T = any>(opts?: PostHttpAction): Observable<AxiosResponse<T, any>> {
    const { url, data, config, route } = opts ?? {};
    return this.httpService.post<AxiosResponse<T, any>>(`${this.apiLink}/${route ?? this.route}/${url ?? ''}`, data, config).pipe(
      map(res => {
        return res.data
      })
    )
  }

  patch<T = any>(opts?: PatchHttpAction): Observable<AxiosResponse<T, any>> {
    const { url, data, config, route } = opts ?? {};
    return this.httpService.patch<AxiosResponse<T, any>>(`${this.apiLink}/${route ?? this.route}/${url ?? ''}`, data, config).pipe(
      map(res => {
        return res.data
      })
    )
  }
}
