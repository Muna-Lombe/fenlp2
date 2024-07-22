import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PDFFILE_TITLE_FIELD } from "./PdfFileTitle";

export const PdfFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="filename" source="filename" />
        <TextField label="pageCount" source="pageCount" />
        <TextField label="fileData" source="fileData" />
        <TextField label="StorageUrl" source="storageUrl" />
        <ReferenceManyField
          reference="PdfPage"
          target="pdfFileId"
          label="PDFPages"
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
            <ReferenceField
              label="pdfFile"
              source="pdffile.id"
              reference="PdfFile"
            >
              <TextField source={PDFFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
