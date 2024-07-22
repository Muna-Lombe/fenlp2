import { JsonValue } from "type-fest";
import { PdfPage } from "../pdfPage/PdfPage";

export type PdfFile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  filename: string | null;
  pageCount: number | null;
  fileData: JsonValue;
  pdfPages?: Array<PdfPage>;
  storageUrl: string | null;
};
