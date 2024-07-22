import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PdfFileTitle } from "../pdfFile/PdfFileTitle";

export const PdfPageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
