import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PdfFileList } from "./pdfFile/PdfFileList";
import { PdfFileCreate } from "./pdfFile/PdfFileCreate";
import { PdfFileEdit } from "./pdfFile/PdfFileEdit";
import { PdfFileShow } from "./pdfFile/PdfFileShow";
import { PdfPageList } from "./pdfPage/PdfPageList";
import { PdfPageCreate } from "./pdfPage/PdfPageCreate";
import { PdfPageEdit } from "./pdfPage/PdfPageEdit";
import { PdfPageShow } from "./pdfPage/PdfPageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PdfProcessorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PdfFile"
          list={PdfFileList}
          edit={PdfFileEdit}
          create={PdfFileCreate}
          show={PdfFileShow}
        />
        <Resource
          name="PdfPage"
          list={PdfPageList}
          edit={PdfPageEdit}
          create={PdfPageCreate}
          show={PdfPageShow}
        />
      </Admin>
    </div>
  );
};

export default App;