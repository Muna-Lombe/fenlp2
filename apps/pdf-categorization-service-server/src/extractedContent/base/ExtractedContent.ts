/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsInt,
  Min,
  Max,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumExtractedContentContentType } from "./EnumExtractedContentContentType";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Pdf } from "../../pdf/base/Pdf";

@ObjectType()
class ExtractedContent {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pageNumber!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumExtractedContentContentType,
  })
  @IsEnum(EnumExtractedContentContentType)
  @IsOptional()
  @Field(() => EnumExtractedContentContentType, {
    nullable: true,
  })
  contentType?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  content!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => Pdf,
  })
  @ValidateNested()
  @Type(() => Pdf)
  @IsOptional()
  pdf?: Pdf | null;
}

export { ExtractedContent as ExtractedContent };
