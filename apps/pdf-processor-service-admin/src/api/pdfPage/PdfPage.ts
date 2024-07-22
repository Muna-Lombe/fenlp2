import { PdfFile } from "../pdfFile/PdfFile";

export type PdfPage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  pageId: number | null;
  processingMethod: string | null;
  includesText: boolean | null;
  includesTables: boolean | null;
  includesImages: boolean | null;
  pdfFile?: PdfFile | null;
};
