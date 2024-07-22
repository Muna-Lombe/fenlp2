import { SortOrder } from "../../util/SortOrder";

export type PdfPageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  pageId?: SortOrder;
  processingMethod?: SortOrder;
  includesText?: SortOrder;
  includesTables?: SortOrder;
  includesImages?: SortOrder;
  pdfFileId?: SortOrder;
};
