import { InputJsonValue } from "../../types";
import { PdfPageCreateNestedManyWithoutPdfFilesInput } from "./PdfPageCreateNestedManyWithoutPdfFilesInput";

export type PdfFileCreateInput = {
  filename?: string | null;
  pageCount?: number | null;
  fileData?: InputJsonValue;
  pdfPages?: PdfPageCreateNestedManyWithoutPdfFilesInput;
  storageUrl?: string | null;
};
