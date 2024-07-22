import * as graphql from "@nestjs/graphql";
import { PdfPageResolverBase } from "./base/pdfPage.resolver.base";
import { PdfPage } from "./base/PdfPage";
import { PdfPageService } from "./pdfPage.service";

@graphql.Resolver(() => PdfPage)
export class PdfPageResolver extends PdfPageResolverBase {
  constructor(protected readonly service: PdfPageService) {
    super(service);
  }
}
