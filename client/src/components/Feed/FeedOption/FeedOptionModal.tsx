import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCustomDialog } from "../../common/hooks/useCustomDialog";
import * as S from "../../common/hooks/useCustomDialog.styles";
import { PATH } from "@/global/constants";
import { HiDotsHorizontal } from "react-icons/hi";
import { storage, storageKeys } from "@/global/storage";
import { useDeleteFeed } from "./FeedOption.hooks";

export function FeedOptionModal({
  feedId,
  userId,
}: {
  feedId: string;
  userId: string;
}) {
  const {
    ActionSheetLayout,
    toggleDialog,
    afterOpenDialog,
    beforeCloseDialog,
    opacity,
    isOpen,
  } = useCustomDialog();

  const { deleteFeed } = useDeleteFeed();
  const navigate = useNavigate();

  const localUserData = storage.get(storageKeys.currentUser);
  // const currentUser = JSON.parse(localUserData as string);

  const options = [
    {
      name: "수정",
      usage: "수정",
      onClick: () => navigate(PATH.updateFeed(feedId)),
    },
    {
      name: "삭제",
      usage: "삭제",
      onClick: async () => {
        toggleDialog();
        await deleteFeed(feedId);
        // toast.custom( TODO: 수정 필요
        //   <div>
        //     <div className="description">dd</div>
        //     <div className="buttons">
        //       <button>취소</button>
        //       <button>확인</button>
        //     </div>
        //   </div>,
        // );
      },
    },
  ];
  const options2 = [
    {
      name: "신고하기",
      usage: "신고하기",
      onClick: async () => {
        toast.success("피드가 신고되었습니다.");
        toggleDialog();
      },
    },
  ];
  return (
    <>
      <HiDotsHorizontal onClick={toggleDialog} />
      <S.ActionSheet
        isOpen={isOpen}
        afterOpen={afterOpenDialog}
        beforeClose={beforeCloseDialog}
        onBackgroundClick={toggleDialog}
        onEscapeKeydown={toggleDialog}
        opacity={opacity}
        backgroundProps={{ opacity }}
        length={options?.length}
        children={
          <ActionSheetLayout
            options={localUserData?.userId === userId ? options : options2}
          />
        }
      ></S.ActionSheet>
    </>
  );
}
