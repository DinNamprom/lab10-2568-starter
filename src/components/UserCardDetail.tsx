import { BsMailbox2, BsFillPinMapFill } from "react-icons/bs";

export const UserCardDetail = ({ email, address }:CardUserProps) => {
  return (
    <div className="text-center">
      <p>
        <BsMailbox2 /> {email}
      </p>
      <p>
        <BsFillPinMapFill /> {address}
      </p>
    </div>
  );
};
