/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ExtractedContentService } from "../extractedContent.service";
import { ExtractedContentCreateInput } from "./ExtractedContentCreateInput";
import { ExtractedContent } from "./ExtractedContent";
import { ExtractedContentFindManyArgs } from "./ExtractedContentFindManyArgs";
import { ExtractedContentWhereUniqueInput } from "./ExtractedContentWhereUniqueInput";
import { ExtractedContentUpdateInput } from "./ExtractedContentUpdateInput";

export class ExtractedContentControllerBase {
  constructor(protected readonly service: ExtractedContentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ExtractedContent })
  async createExtractedContent(
    @common.Body() data: ExtractedContentCreateInput
  ): Promise<ExtractedContent> {
    return await this.service.createExtractedContent({
      data: {
        ...data,

        pdf: data.pdf
          ? {
              connect: data.pdf,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        pageNumber: true,
        contentType: true,
        content: true,

        pdf: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ExtractedContent] })
  @ApiNestedQuery(ExtractedContentFindManyArgs)
  async extractedContents(
    @common.Req() request: Request
  ): Promise<ExtractedContent[]> {
    const args = plainToClass(ExtractedContentFindManyArgs, request.query);
    return this.service.extractedContents({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        pageNumber: true,
        contentType: true,
        content: true,

        pdf: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ExtractedContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async extractedContent(
    @common.Param() params: ExtractedContentWhereUniqueInput
  ): Promise<ExtractedContent | null> {
    const result = await this.service.extractedContent({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        pageNumber: true,
        contentType: true,
        content: true,

        pdf: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ExtractedContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateExtractedContent(
    @common.Param() params: ExtractedContentWhereUniqueInput,
    @common.Body() data: ExtractedContentUpdateInput
  ): Promise<ExtractedContent | null> {
    try {
      return await this.service.updateExtractedContent({
        where: params,
        data: {
          ...data,

          pdf: data.pdf
            ? {
                connect: data.pdf,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          pageNumber: true,
          contentType: true,
          content: true,

          pdf: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ExtractedContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteExtractedContent(
    @common.Param() params: ExtractedContentWhereUniqueInput
  ): Promise<ExtractedContent | null> {
    try {
      return await this.service.deleteExtractedContent({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          pageNumber: true,
          contentType: true,
          content: true,

          pdf: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
