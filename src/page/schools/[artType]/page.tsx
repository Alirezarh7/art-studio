import type { FC } from "react";
import { useParams } from "react-router-dom";

const SchoolsList: FC = () => {
  const { artType } = useParams<{ artType: string }>();
  return <div className="my-16">{artType}</div>;
};
export default SchoolsList;
