import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PdfFileTitle } from "../pdfFile/PdfFileTitle";

export const PdfPageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="pageId" source="pageId" />
        <TextInput label="processingMethod" source="processingMethod" />
        <BooleanInput label="includesText" source="includesText" />
        <BooleanInput label="includesTables" source="includesTables" />
        <BooleanInput label="includesImages" source="includesImages" />
        <ReferenceInput source="pdfFile.id" reference="PdfFile" label="pdfFile">
          <SelectInput optionText={PdfFileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
