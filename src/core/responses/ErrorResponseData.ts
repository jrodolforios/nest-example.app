import { ApiProperty } from "@nestjs/swagger";

export class Data {
    @ApiProperty()
    targetSite: null | string;
    @ApiProperty()
    message: string;
    @ApiProperty()
    data: object;
    @ApiProperty()
    innerException: null | string;
    @ApiProperty()
    helpLink: null | string;
    @ApiProperty()
    source: null | string;
    @ApiProperty()
    hResult: number;
    @ApiProperty()
    stackTrace: null | string;
}

export class ErrorResponseData {
    @ApiProperty()
    data : Data
  }