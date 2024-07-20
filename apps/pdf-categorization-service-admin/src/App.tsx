import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PdfList } from "./pdf/PdfList";
import { PdfCreate } from "./pdf/PdfCreate";
import { PdfEdit } from "./pdf/PdfEdit";
import { PdfShow } from "./pdf/PdfShow";
import { ExtractedContentList } from "./extractedContent/ExtractedContentList";
import { ExtractedContentCreate } from "./extractedContent/ExtractedContentCreate";
import { ExtractedContentEdit } from "./extractedContent/ExtractedContentEdit";
import { ExtractedContentShow } from "./extractedContent/ExtractedContentShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"PDFCategorizationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pdf"
          list={PdfList}
          edit={PdfEdit}
          create={PdfCreate}
          show={PdfShow}
        />
        <Resource
          name="ExtractedContent"
          list={ExtractedContentList}
          edit={ExtractedContentEdit}
          create={ExtractedContentCreate}
          show={ExtractedContentShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
