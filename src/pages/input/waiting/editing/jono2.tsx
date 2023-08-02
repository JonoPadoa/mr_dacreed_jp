import React from "react";
import JPTestHeader from "~/pages/components/jpComponents/JPTestHeader";
import TopNav from "~/pages/components/jpComponents/TopNav";
import { useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

const Jono2 = () => {
  return (
    <div>
      <TopNav />
      <JPTestHeader />
      <Content />
    </div>
  );
};

export default Jono2;

const Content: React.FC = () => {
  const { user } = useUser();

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined,
    {
      enabled: user?.id !== undefined,
    }
  );

  return <div>{JSON.stringify(topics)}</div>;
};
