import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";

export type PdfPageCreateInput = {
  pageId?: number | null;
  processingMethod?: string | null;
  includesText?: boolean | null;
  includesTables?: boolean | null;
  includesImages?: boolean | null;
  pdfFile?: PdfFileWhereUniqueInput | null;
};
