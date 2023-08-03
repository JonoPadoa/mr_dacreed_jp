import React from "react";
import JPTestHeader from "~/pages/components/jpComponents/JPTestHeader";
import TopNav from "~/pages/components/jpComponents/TopNav";
import { api, type RouterOutputs } from "~/utils/api";
import { useState } from "react";

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

type Topic = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  userId: string;
};

const Content: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined, // no input
    {
      onSuccess: (data) => {
        if (data && data.length > 0 && data[0]) {
          setSelectedTopic(data[0]);
        } else {
          setSelectedTopic(null);
        }
      },
    }
  );

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  return (
    <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
      <div className="px-2">
        <ul className="menu rounded-box w-56 bg-base-100 p-2">
          {topics?.map((topic) => (
            <li key={topic.id}>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  setSelectedTopic(topic);
                }}
              >
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="divider"></div>
        <input
          type="text"
          placeholder="New Topic"
          className="input-bordered input input-sm w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createTopic.mutate({
                title: e.currentTarget.value,
              });
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
      <div className="col-span-3">
        {/* Content goes here */}
        {selectedTopic && <div>Selected topic: {selectedTopic.title}</div>}
      </div>
    </div>
  );
};
