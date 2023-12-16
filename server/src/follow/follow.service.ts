import FollowModel from "./follow.model.js";

type FollowPostType = {
  follower: string;
  following: string;
};

const followService = {
  async getFollows(userid: string) {
    const followingList = await FollowModel.find({ following: userid });
    const followerList = await FollowModel.find({ follower: userid });

    return { following: followingList, follower: followerList };
  },

  async getFollowers(userid: string) {
    return FollowModel.find({ follower: userid });
  },

  async getFollowings(userid: string) {
    return FollowModel.find({ following: userid });
  },

  async postFollow({ follower, following }: FollowPostType) {
    const existingUser = await FollowModel.findOne({
      follower: follower,
      following: following,
    });

    if (existingUser) {
      return { status: 400, message: "이미 팔로우 상태입니다." };
    }
    return FollowModel.create({ follower, following });
  },

  async deleteFollow(follower: string, following: string) {
    return FollowModel.deleteOne({ follower: follower, following: following });
  },

  async deleteFollowById(_id: string) {
    return FollowModel.deleteOne({ _id });
  },
};

export default followService;
