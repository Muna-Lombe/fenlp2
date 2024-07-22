/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PdfPage as PrismaPdfPage,
  PdfFile as PrismaPdfFile,
} from "@prisma/client";
import { PdfPageCreateInput } from "./PdfPageCreateInput";
import { PdfPageUpdateInput } from "./PdfPageUpdateInput";
import { PdfPageUpdatePascalInput } from "../PdfPageUpdatePascalInput";
import { PdfPage } from "./PdfPage";

export class PdfPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PdfPageCountArgs, "select">): Promise<number> {
    return this.prisma.pdfPage.count(args);
  }

  async pdfPages(args: Prisma.PdfPageFindManyArgs): Promise<PrismaPdfPage[]> {
    return this.prisma.pdfPage.findMany(args);
  }
  async pdfPage(
    args: Prisma.PdfPageFindUniqueArgs
  ): Promise<PrismaPdfPage | null> {
    return this.prisma.pdfPage.findUnique(args);
  }
  async createPdfPage(args: Prisma.PdfPageCreateArgs): Promise<PrismaPdfPage> {
    return this.prisma.pdfPage.create(args);
  }
  async updatePdfPage(args: Prisma.PdfPageUpdateArgs): Promise<PrismaPdfPage> {
    return this.prisma.pdfPage.update(args);
  }
  async deletePdfPage(args: Prisma.PdfPageDeleteArgs): Promise<PrismaPdfPage> {
    return this.prisma.pdfPage.delete(args);
  }

  async getPdfFile(parentId: string): Promise<PrismaPdfFile | null> {
    return this.prisma.pdfPage
      .findUnique({
        where: { id: parentId },
      })
      .pdfFile();
  }
  async AddPdfPage(args: PdfPageCreateInput): Promise<PdfPageCreateInput> {
    throw new Error("Not implemented");
  }
  async DeletePdfPage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdatePdfPage(args: PdfPageUpdateInput): Promise<PdfPageUpdateInput> {
    throw new Error("Not implemented");
  }
  async UpdatePdfPageWithPascalCase(
    args: PdfPageUpdatePascalInput
  ): Promise<PdfPage> {
    throw new Error("Not implemented");
  }
}