import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PdfPageListRelationFilter } from "../pdfPage/PdfPageListRelationFilter";

export type PdfFileWhereInput = {
  id?: StringFilter;
  filename?: StringNullableFilter;
  pageCount?: IntNullableFilter;
  fileData?: JsonFilter;
  pdfPages?: PdfPageListRelationFilter;
  storageUrl?: StringNullableFilter;
};
