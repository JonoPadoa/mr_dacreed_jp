import { useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export const Header = () => {
  const { user } = useUser();

  return (
    <div className="h-250  relative flex w-full items-center justify-between bg-accentd px-2 py-4">
      <div className="text-primarydtext flex h-20 w-3/4 items-center justify-start pl-5 text-3xl font-bold">
        {user?.firstName ? `Hi ${user.firstName}, welcome back.` : ""}
      </div>
      <div className="mr-3 flex h-20 w-20">
        <div className="flex h-20 w-20 items-center justify-center">
          {user?.firstName ? (
            <div className="w-full">
              <img
                className="rounded-full border-solid"
                src={user.profileImageUrl ?? ""}
                alt={user?.firstName ?? ""}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
