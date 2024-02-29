import { IsOptional, IsString } from "class-validator";

export class SearchOptions {
  @IsString()
  @IsOptional()
  term?: string;

  @IsString()
  @IsOptional()
  lang?: string;
}