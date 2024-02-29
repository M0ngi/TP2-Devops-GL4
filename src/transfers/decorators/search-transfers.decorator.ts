
import { SearchParams } from '@base/search-params';
import { GetTransfersOptions } from '@transfers/dto/get-transfers-options.dto';

export const GetTransfersOptionsDeco = () => SearchParams(GetTransfersOptions);