import { Request } from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import { CustomError } from "../middleware/errorHandler.js";
import feedService from "./feed.service.js";
import { ObjectId } from "mongodb";
import decodeTokenPayload from "../utils/decodeTokenPayload.js";

type FeedType = {
  userId: string;
  category: string;
  content: string;
  imgUrls: string[];
  hashtag?: string[];
};

const feedController = {
  getFeed: asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw new CustomError({
        status: 400,
        message: "요청에 필요한 정보가 부족합니다.",
      });
    }

    const feed = await feedService.getFeed({ id });
    res.json(feed);
  }),

  getFeeds: asyncHandler(async (req, res) => {
    const { cursor, limit } = req.query;
    const feeds = await feedService.getFeeds({
      cursor: Number(cursor),
      limit: Number(limit),
    });

    res.json(feeds);
  }),

  getProfileFeeds: asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { cursor, limit } = req.query;
    const feeds = await feedService.getFeedsFindByProp({
      prop: { key: "userId", value: new ObjectId(userId as string) },
      cursor: Number(cursor),
      limit: Number(limit),
    });

    res.json(feeds);
  }),

  getCategoryFeeds: asyncHandler(async (req, res) => {
    const { categoryId } = req.params;
    const { cursor, limit } = req.query;

    const feeds = await feedService.getFeedsFindByProp({
      prop: { key: "category", value: new ObjectId(categoryId as string) },
      cursor: Number(cursor),
      limit: Number(limit),
    });

    res.json(feeds);
  }),

  getFeedsSearchedByContent: asyncHandler(async (req, res) => {
    const { query } = req.params;
    const { cursor, limit } = req.query;

    const feeds = await feedService.getFeedsSearchedByQuery({
      query: { key: "content", value: query },
      cursor: Number(cursor),
      limit: Number(limit),
    });

    res.json(feeds);
  }),

  getFeedsSearchedByHashtag: asyncHandler(async (req, res) => {
    const { query } = req.params;
    const { cursor, limit } = req.query;

    const feeds = await feedService.getFeedsSearchedByQuery({
      query: { key: "hashtag", value: query },
      cursor: Number(cursor),
      limit: Number(limit),
    });

    res.json(feeds);
  }),

  getMyBookmarkFeeds: asyncHandler(async (req, res) => {
    const { cursor, limit } = req.query;

    const token = req.cookies.service_token;

    if (!token) {
      throw new CustomError({
        status: 401,
        message: "토큰을 전달받지 못했습니다.",
      });
    }

    const userId = decodeTokenPayload(token)["user_id"];

    const feeds = await feedService.getUserBookmarkFeeds({
      userId: new ObjectId(userId),
      cursor: Number(cursor),
      limit: Number(limit),
    });

    res.json(feeds);
  }),

  createFeed: asyncHandler(async (req: Request<{}, {}, FeedType>, res) => {
    const { category, content, imgUrls, hashtag } = req.body;
    const userToken = req.cookies.service_token;
    const userId = decodeTokenPayload(userToken)["user_id"];

    if (!category || !content || imgUrls.length == 0) {
      throw new CustomError({
        status: 400,
        message: "요청에 필요한 정보가 부족합니다.",
      });
    }

    feedService.createFeed({ userId, category, content, imgUrls, hashtag });
    res.status(200).end();
  }),

  updateFeed: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { category, content, imgUrls, hashtag }: FeedType = req.body;
    const userToken = req.cookies.service_token;
    const userId = decodeTokenPayload(userToken)["user_id"];

    if (!category || !content || imgUrls.length == 0) {
      throw new CustomError({
        status: 400,
        message: "요청에 필요한 정보가 부족합니다.",
      });
    }

    feedService.updateFeed({ id, userId, category, content, imgUrls, hashtag });
    res.status(200).end();
  }),

  deleteFeed: asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
      throw new CustomError({
        status: 400,
        message: "요청에 필요한 정보가 부족합니다.",
      });
    }
    feedService.deleteFeed({ id });
    res.status(204).end();
  }),
};

export default feedController;
