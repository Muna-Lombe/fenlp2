import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PdfPageService } from "./pdfPage.service";
import { PdfPageControllerBase } from "./base/pdfPage.controller.base";

@swagger.ApiTags("pdfPages")
@common.Controller("pdfPages")
export class PdfPageController extends PdfPageControllerBase {
  constructor(protected readonly service: PdfPageService) {
    super(service);
  }
}
