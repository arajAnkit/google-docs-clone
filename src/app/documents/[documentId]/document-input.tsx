import { BsCloudCheck } from "react-icons/bs";
export const DocumnetInput = () => {
  return (
    <div className="flex items-center gap2">
      <span className="text-lg px-1.5 cursor-pointer truncate">
        Untitled Document
      </span>
      <BsCloudCheck />
    </div>
  );
};
