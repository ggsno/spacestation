import { Label } from "@/components/CreateFeed/CreateFeed.styles.ts";
import * as SDialog from "../hooks/useCustomDialog.styles.ts";
import * as S from "./GeoLocation.styles.ts";
import { useCustomDialog } from "../hooks/useCustomDialog.tsx";
import KakaoMap from "./GeoLocation.kakaomap.tsx";
import { storage, storageKeys } from "@/global/storage";
import { useRecoilState } from "recoil";
import { geoLocationAtom } from "../../Atoms/GeoLocationAtom";

export default function GeoLocation() {
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationAtom);

  const {
    toggleDialog,
    afterOpenDialog,
    beforeCloseDialog,
    opacity,
    isOpen,
    ConfirmPopupLayout,
  } = useCustomDialog();

  const buttons = [
    {
      name: "취소",
      usage: "NEUTRAL",
      onClick: () => {
        storage.remove(storageKeys.geoLocation);
        toggleDialog();
      },
    },
    {
      name: "위치 정보 저장",
      usage: "SUBMIT",
      onClick: () => {
        const geoLocationMarker = storage.get(storageKeys.geoLocation);
        if (geoLocationMarker) {
          console.log(geoLocationMarker);
          setGeoLocation(geoLocationMarker);
          storage.remove(storageKeys.geoLocation);
        }
        toggleDialog();
      },
    },
  ];

  return (
    <>
      <Label htmlFor="geolocation">위치</Label>
      {geoLocation.content !== undefined && (
        <S.GeoLocationInput
          value={
            geoLocation ? geoLocation.content : "선택된 장소가 표시됩니다."
          }
          name="geoSelectedInfo"
          type="text"
          readOnly
        />
      )}
      <button
        onClick={() => {
          toggleDialog();
        }}
      >
        위치 정보 설정하기
      </button>
      <SDialog.ConfirmPopup
        isOpen={isOpen}
        afterOpen={afterOpenDialog}
        beforeClose={beforeCloseDialog}
        onBackgroundClick={toggleDialog}
        onEscapeKeydown={toggleDialog}
        opacity={opacity}
        backgroundProps={{ opacity }}
        children={
          <ConfirmPopupLayout buttons={buttons}>
            <S.GeoLocationInnerLayout>
              <KakaoMap />
            </S.GeoLocationInnerLayout>
          </ConfirmPopupLayout>
        }
      ></SDialog.ConfirmPopup>
    </>
  );
}
