import { IsOptional, IsString } from "class-validator";

export class GetLeagueOptions {
  @IsString()
  @IsOptional()
  season?: string;

  @IsString()
  @IsOptional()
  tab?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  timeZone?: string;
}