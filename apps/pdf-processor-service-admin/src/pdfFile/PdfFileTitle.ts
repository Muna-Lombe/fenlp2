import { PdfFile as TPdfFile } from "../api/pdfFile/PdfFile";

export const PDFFILE_TITLE_FIELD = "filename";

export const PdfFileTitle = (record: TPdfFile): string => {
  return record.filename?.toString() || String(record.id);
};
