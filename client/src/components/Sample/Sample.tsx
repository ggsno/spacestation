// TODO: 프로젝트 구조를 보여주기위한 샘플 파일임. 구조 잡히면 지우기.
import Loading from "../common/Loading";
import { useSample } from "./Sample.hooks";
import SampleItem from "./SampleItem";

export default function Sample() {
  const { samples, postSample, isLoading, isError, error } = useSample();

  if (isLoading) return <Loading />;
  if (isError) return error.message;

  return (
    <>
      <button
        onClick={async () => {
          const res = await postSample({ content: "ㅁ" });
          console.log(res);
        }}
      >
        post sample
      </button>
      {samples!.map((sample) => (
        <SampleItem key={sample._id} item={sample} />
      ))}
    </>
  );
}
