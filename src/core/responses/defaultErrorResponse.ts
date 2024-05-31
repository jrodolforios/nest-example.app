import { ApiProperty } from "@nestjs/swagger";

export class CustomErrorResponse {
    @ApiProperty()
    StatusCode: number;
    @ApiProperty()
    TargetSite?: string;
    @ApiProperty()
    Message: string;
    @ApiProperty()
    InnerException?: string;
    @ApiProperty()
    HelpLink?: string;
    @ApiProperty()
    Source?: string;
    @ApiProperty()
    HResult?: number;
    @ApiProperty()
    stackTrace?: string;
  }

  export interface ErrorResponse {
    type: string;
    title: string;
    status: number;
    errors: string[]; // Assuming errors can be arrays of any type
    traceId: string;
  }