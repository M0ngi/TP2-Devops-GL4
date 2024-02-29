import extract from '@app_config/validate-env';
import { registerAs } from '@nestjs/config';
import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export interface IMiscConfig {
  nodeVersion: string;
  nodeEnv: string;
  port: number;
  baseApi: string;
  searchApi: string;
}

enum NodeEnv {
  development,
  production,
}

class MiscEnv {
  @Expose()
  @IsString()
  BASE_FOTMOB_API: string;

  @Expose()
  @IsString()
  SEARCH_FOTMOB_API: string;

  @Expose()
  @IsString()
  NODE_VERSION: string;

  @Expose()
  @IsString()
  @IsEnum(NodeEnv)
  NODE_ENV: string;

  @Expose()
  @IsNumber()
  @IsPositive()
  BACKEND_PORT: number;
}

export const miscConfig = registerAs('miscConfig', (): IMiscConfig => {
  const config = extract(MiscEnv);
  return {
    nodeVersion: config.NODE_VERSION,
    nodeEnv: config.NODE_ENV,
    port: config.BACKEND_PORT,
    baseApi: config.BASE_FOTMOB_API,
    searchApi: config.SEARCH_FOTMOB_API,
  };
});
