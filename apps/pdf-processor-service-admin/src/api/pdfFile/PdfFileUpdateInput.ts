import { InputJsonValue } from "../../types";
import { PdfPageUpdateManyWithoutPdfFilesInput } from "./PdfPageUpdateManyWithoutPdfFilesInput";

export type PdfFileUpdateInput = {
  filename?: string | null;
  pageCount?: number | null;
  fileData?: InputJsonValue;
  pdfPages?: PdfPageUpdateManyWithoutPdfFilesInput;
  storageUrl?: string | null;
};
