/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PdfWhereInput } from "./PdfWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PdfOrderByInput } from "./PdfOrderByInput";

@ArgsType()
class PdfFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PdfWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PdfWhereInput, { nullable: true })
  @Type(() => PdfWhereInput)
  where?: PdfWhereInput;

  @ApiProperty({
    required: false,
    type: [PdfOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PdfOrderByInput], { nullable: true })
  @Type(() => PdfOrderByInput)
  orderBy?: Array<PdfOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PdfFindManyArgs as PdfFindManyArgs };
