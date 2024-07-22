import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";

export type PdfPageUpdateInput = {
  pageId?: number | null;
  processingMethod?: string | null;
  includesText?: boolean | null;
  includesTables?: boolean | null;
  includesImages?: boolean | null;
  pdfFile?: PdfFileWhereUniqueInput | null;
};
