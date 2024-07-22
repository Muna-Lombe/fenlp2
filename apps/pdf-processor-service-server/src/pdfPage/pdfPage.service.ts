import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PdfPageServiceBase } from "./base/pdfPage.service.base";

@Injectable()
export class PdfPageService extends PdfPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
