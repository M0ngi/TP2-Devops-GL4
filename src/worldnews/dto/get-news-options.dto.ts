import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetNewsOptions {
  @IsNumber()
  @IsOptional()
  page?: number;

  @IsString()
  @IsOptional()
  lang?: string;
}