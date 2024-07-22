import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PdfPageTitle } from "../pdfPage/PdfPageTitle";

export const PdfFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <NumberInput step={1} label="pageCount" source="pageCount" />
        <div />
        <ReferenceArrayInput
          source="pdfPages"
          reference="PdfPage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PdfPageTitle} />
        </ReferenceArrayInput>
        <TextInput label="StorageUrl" source="storageUrl" />
      </SimpleForm>
    </Edit>
  );
};
