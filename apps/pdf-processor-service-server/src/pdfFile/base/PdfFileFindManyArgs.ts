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
import { PdfFileWhereInput } from "./PdfFileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PdfFileOrderByInput } from "./PdfFileOrderByInput";

@ArgsType()
class PdfFileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PdfFileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PdfFileWhereInput, { nullable: true })
  @Type(() => PdfFileWhereInput)
  where?: PdfFileWhereInput;

  @ApiProperty({
    required: false,
    type: [PdfFileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PdfFileOrderByInput], { nullable: true })
  @Type(() => PdfFileOrderByInput)
  orderBy?: Array<PdfFileOrderByInput>;

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

export { PdfFileFindManyArgs as PdfFileFindManyArgs };
