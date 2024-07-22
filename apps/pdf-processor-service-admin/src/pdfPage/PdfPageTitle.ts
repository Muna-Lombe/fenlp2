import { PdfPage as TPdfPage } from "../api/pdfPage/PdfPage";

export const PDFPAGE_TITLE_FIELD = "processingMethod";

export const PdfPageTitle = (record: TPdfPage): string => {
  return record.processingMethod?.toString() || String(record.id);
};
