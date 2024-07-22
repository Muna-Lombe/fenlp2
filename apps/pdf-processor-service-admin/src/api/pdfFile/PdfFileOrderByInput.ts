import { SortOrder } from "../../util/SortOrder";

export type PdfFileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  filename?: SortOrder;
  pageCount?: SortOrder;
  fileData?: SortOrder;
  storageUrl?: SortOrder;
};
