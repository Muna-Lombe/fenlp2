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
  Pdf as PrismaPdf,
  ExtractedContent as PrismaExtractedContent,
} from "@prisma/client";

export class PdfServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PdfCountArgs, "select">): Promise<number> {
    return this.prisma.pdf.count(args);
  }

  async pdfs(args: Prisma.PdfFindManyArgs): Promise<PrismaPdf[]> {
    return this.prisma.pdf.findMany(args);
  }
  async pdf(args: Prisma.PdfFindUniqueArgs): Promise<PrismaPdf | null> {
    return this.prisma.pdf.findUnique(args);
  }
  async createPdf(args: Prisma.PdfCreateArgs): Promise<PrismaPdf> {
    return this.prisma.pdf.create(args);
  }
  async updatePdf(args: Prisma.PdfUpdateArgs): Promise<PrismaPdf> {
    return this.prisma.pdf.update(args);
  }
  async deletePdf(args: Prisma.PdfDeleteArgs): Promise<PrismaPdf> {
    return this.prisma.pdf.delete(args);
  }

  async findExtractedContents(
    parentId: string,
    args: Prisma.ExtractedContentFindManyArgs
  ): Promise<PrismaExtractedContent[]> {
    return this.prisma.pdf
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .extractedContents(args);
  }
}
