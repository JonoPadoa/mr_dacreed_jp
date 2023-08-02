import { useSession } from "next-auth/react";
import { useUser } from "@clerk/nextjs";

import React from "react";

const JPTestHeader = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <div className="relative flex h-20 items-center justify-center bg-gray-600">
        <div className="bg- flex max-w-xl flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md">
          {user?.fullName
            ? `Notes for ${user.fullName} and user ID: ${user.id}`
            : ""}
        </div>
      </div>
    </div>
  );
};

export default JPTestHeader;
