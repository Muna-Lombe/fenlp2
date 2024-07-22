import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PDFFILE_TITLE_FIELD } from "../pdfFile/PdfFileTitle";

export const PdfPageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PDFPages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="pageId" source="pageId" />
        <TextField label="processingMethod" source="processingMethod" />
        <BooleanField label="includesText" source="includesText" />
        <BooleanField label="includesTables" source="includesTables" />
        <BooleanField label="includesImages" source="includesImages" />
        <ReferenceField label="pdfFile" source="pdffile.id" reference="PdfFile">
          <TextField source={PDFFILE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
