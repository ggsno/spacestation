import "dotenv/config";
import asyncHandler from "../middleware/asyncHandler.js";
import { CustomError } from "../middleware/errorHandler.js";
import express, { Response } from "express";
import { userService, authService } from "./auth.service.js";

const authController = {
  handleKakaoOAuthProcess: asyncHandler(
    async (req: express.Request, res: Response) => {
      const code = await authService.validateKakaoOAuthCode(
        req.query.code as string,
      );

      const data = await authService.getKakaoAccessToken(code);

      const userInfo = await authService.getUserInfo(data.accessToken);

      const isNewUser = await userService.searchUsers(userInfo.id);

      const action = isNewUser.length === 0 ? "join" : "login";

      console.log(
        `가입 정보가 ${
          action === "join" ? "존재하지 않습니다." : "존재합니다."
        }`,
      );

      const result = await authService.handleAuthUser(userInfo, action);
      const token = authService.generateJWT(
        result.user._id,
        result.user.nickname,
      );
      console.log(result, token);
      res.cookie("service_token", token, { httpOnly: true });
      res.redirect(`${process.env.FRONTEND_URL}`);
    },
  ),
  handleLogin: asyncHandler(async (req: express.Request, res: Response) => {
    const snsId = req.body.snsId;
    const result = await userService.signIn(snsId);
    if (!result) {
      throw new CustomError({
        status: 404,
        message: "존재하지 않는 id입니다.",
      });
    }

    res.status(200).json({
      message: "로그인에 성공했습니다.",
      user: result,
    });
  }),
  handleJoin: asyncHandler(async (req: express.Request, res: Response) => {
    const snsId = req.body.snsId;
    const result = await userService.signUp(snsId);
    if (!result) {
      throw new CustomError({
        status: 400,
        message: "회원 가입에 실패했습니다.",
      });
    }
    res.status(201).json({
      message: "회원 가입에 성공했습니다.",
      user: result,
    });
  }),
};

export default authController;
