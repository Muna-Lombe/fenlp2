import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";

export type PdfPageWhereInput = {
  id?: StringFilter;
  pageId?: IntNullableFilter;
  processingMethod?: StringNullableFilter;
  includesText?: BooleanNullableFilter;
  includesTables?: BooleanNullableFilter;
  includesImages?: BooleanNullableFilter;
  pdfFile?: PdfFileWhereUniqueInput;
};
