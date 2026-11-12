import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { User } from "@/lib/types";

/** A person's Google picture, or their initial; sized to sit beside 13px text like EmployeeAvatar's "sm". */
export function UserAvatar({ user, className }: { user: Pick<User, "username" | "profileImage">; className?: string }) {
  return (
    <Avatar className={cn("size-[18px]", className)}>
      {user.profileImage && <AvatarImage src={user.profileImage} alt="" />}
      <AvatarFallback className="text-[10px] font-medium">{user.username.slice(0, 1).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
