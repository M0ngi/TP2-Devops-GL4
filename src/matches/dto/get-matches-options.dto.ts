import { IsOptional, IsString } from "class-validator";

export class GetMatchesOptions {
  @IsString()
  @IsOptional()
  date?: string;
}