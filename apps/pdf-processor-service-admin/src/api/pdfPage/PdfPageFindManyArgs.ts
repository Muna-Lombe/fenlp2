import { PdfPageWhereInput } from "./PdfPageWhereInput";
import { PdfPageOrderByInput } from "./PdfPageOrderByInput";

export type PdfPageFindManyArgs = {
  where?: PdfPageWhereInput;
  orderBy?: Array<PdfPageOrderByInput>;
  skip?: number;
  take?: number;
};
