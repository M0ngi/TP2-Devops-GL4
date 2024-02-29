import { IsOptional, IsString } from "class-validator";

export class GetTransfersOptions {
  @IsString()
  @IsOptional()
  page?: string;

  @IsString()
  @IsOptional()
  lang?: string;
}