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
import { PdfPageWhereUniqueInput } from "./PdfPageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PdfPageUpdateInput } from "./PdfPageUpdateInput";

@ArgsType()
class UpdatePdfPageArgs {
  @ApiProperty({
    required: true,
    type: () => PdfPageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PdfPageWhereUniqueInput)
  @Field(() => PdfPageWhereUniqueInput, { nullable: false })
  where!: PdfPageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PdfPageUpdateInput,
  })
  @ValidateNested()
  @Type(() => PdfPageUpdateInput)
  @Field(() => PdfPageUpdateInput, { nullable: false })
  data!: PdfPageUpdateInput;
}

export { UpdatePdfPageArgs as UpdatePdfPageArgs };
