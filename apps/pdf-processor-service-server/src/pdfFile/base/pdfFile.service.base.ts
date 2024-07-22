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
  PdfFile as PrismaPdfFile,
  PdfPage as PrismaPdfPage,
} from "@prisma/client";
import { PdfFileCreateInput } from "./PdfFileCreateInput";
import { PdfFileUpdateInput } from "./PdfFileUpdateInput";
import { PdfFileUpdatePascalInput } from "../PdfFileUpdatePascalInput";
import { PdfFile } from "./PdfFile";

export class PdfFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PdfFileCountArgs, "select">): Promise<number> {
    return this.prisma.pdfFile.count(args);
  }

  async pdfFiles(args: Prisma.PdfFileFindManyArgs): Promise<PrismaPdfFile[]> {
    return this.prisma.pdfFile.findMany(args);
  }
  async pdfFile(
    args: Prisma.PdfFileFindUniqueArgs
  ): Promise<PrismaPdfFile | null> {
    return this.prisma.pdfFile.findUnique(args);
  }
  async createPdfFile(args: Prisma.PdfFileCreateArgs): Promise<PrismaPdfFile> {
    return this.prisma.pdfFile.create(args);
  }
  async updatePdfFile(args: Prisma.PdfFileUpdateArgs): Promise<PrismaPdfFile> {
    return this.prisma.pdfFile.update(args);
  }
  async deletePdfFile(args: Prisma.PdfFileDeleteArgs): Promise<PrismaPdfFile> {
    return this.prisma.pdfFile.delete(args);
  }

  async findPdfPages(
    parentId: string,
    args: Prisma.PdfPageFindManyArgs
  ): Promise<PrismaPdfPage[]> {
    return this.prisma.pdfFile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pdfPages(args);
  }
  async AddPdfFile(args: PdfFileCreateInput): Promise<PdfFileCreateInput> {
    throw new Error("Not implemented");
  }
  async DeletePdfFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdatePdfFile(args: PdfFileUpdateInput): Promise<PdfFileUpdateInput> {
    throw new Error("Not implemented");
  }
  async UpdatePdfFilePascalCase(
    args: PdfFileUpdateInput
  ): Promise<PdfFileUpdateInput> {
    throw new Error("Not implemented");
  }
  async UpdatePdfFileWithPascalCase(
    args: PdfFileUpdatePascalInput
  ): Promise<PdfFile> {
    throw new Error("Not implemented");
  }
}