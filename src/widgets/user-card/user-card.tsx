import { UserCardProps } from "./user-card.model";
import { Mail, Smartphone } from "lucide-react";

export const UserCard: React.FC<UserCardProps> = (props) => {
  const { username, phone, email } = props;

  return (
    <div className="min-w-[300px] bg-white text-black/90 rounded-xl text-center p-5 flex flex-col items-center gap-3">
      <b className="text-green text-xl">{username}</b>
      <div className="flex items-center gap-2">
        <Smartphone size={17} />
        <p>{phone}</p>
      </div>
      <div className="flex items-center gap-2">
        <Mail size={17} />
        <p>{email}</p>
      </div>
    </div>
  );
};
