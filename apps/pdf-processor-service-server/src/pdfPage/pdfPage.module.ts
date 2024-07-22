import { Module } from "@nestjs/common";
import { PdfPageModuleBase } from "./base/pdfPage.module.base";
import { PdfPageService } from "./pdfPage.service";
import { PdfPageController } from "./pdfPage.controller";
import { PdfPageResolver } from "./pdfPage.resolver";

@Module({
  imports: [PdfPageModuleBase],
  controllers: [PdfPageController],
  providers: [PdfPageService, PdfPageResolver],
  exports: [PdfPageService],
})
export class PdfPageModule {}
