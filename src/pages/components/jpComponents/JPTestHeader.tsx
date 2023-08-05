import { useSession } from "next-auth/react";
import { useUser } from "@clerk/nextjs";

import React from "react";

const JPTestHeader = () => {
  const { user } = useUser();
  return (
    <div>
      <div className="relative flex h-20 flex-col items-center justify-center bg-gray-600">
        <div className="my-3 mt-8 flex h-20 w-20 items-center justify-center rounded-lg bg-yellow-100">
          <img
            className="rounded-lg"
            src={user?.imageUrl ?? ""}
            alt="Profile Pic"
          />
        </div>
        <div className="bg- flex max-w-xl flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md">
          {`Username: ${user?.username} & ID: ${user?.id}`}
        </div>
        {/* <div className="bg- flex max-w-xl flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md">
          {user?.fullName
            ? `Notes for ${user.emailAddresses} and user ID: ${user.id}`
            : "Not currently showing anything"}
        </div> */}
      </div>
    </div>
  );
};

export default JPTestHeader;
