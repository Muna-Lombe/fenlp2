import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PdfFileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PDFFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="filename" source="filename" />
        <TextField label="pageCount" source="pageCount" />
        <TextField label="fileData" source="fileData" />
        <TextField label="StorageUrl" source="storageUrl" />
      </Datagrid>
    </List>
  );
};
