/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExtractedContentWhereInput } from "./ExtractedContentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExtractedContentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExtractedContentWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractedContentWhereInput)
  @IsOptional()
  @Field(() => ExtractedContentWhereInput, {
    nullable: true,
  })
  every?: ExtractedContentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExtractedContentWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractedContentWhereInput)
  @IsOptional()
  @Field(() => ExtractedContentWhereInput, {
    nullable: true,
  })
  some?: ExtractedContentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExtractedContentWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractedContentWhereInput)
  @IsOptional()
  @Field(() => ExtractedContentWhereInput, {
    nullable: true,
  })
  none?: ExtractedContentWhereInput;
}
export { ExtractedContentListRelationFilter as ExtractedContentListRelationFilter };
