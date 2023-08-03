import React from "react";
import JPTestHeader from "~/pages/components/jpComponents/JPTestHeader";
import TopNav from "~/pages/components/jpComponents/TopNav";
// import { useUser } from "@clerk/nextjs";
// import { useState } from "react";
// // import { api } from "~/utils/api";
// import { api, type RouterOutputs } from "~/utils/api";

const Jono2 = () => {
  return (
    <div>
      <TopNav />
      <JPTestHeader />
      {/* <Content /> */}
    </div>
  );
};

export default Jono2;

// // const Content: React.FC = () => {
// //   const { user } = useUser();

// //   const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
// //     undefined,
// //     {
// //       enabled: user?.id !== undefined,
// //     }
// //   );

// //   return <div>{JSON.stringify(topics)}</div>;
// // };

// type Topic = RouterOutputs["topic"]["getAll"];

// const Content: React.FC = () => {
//   const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

//   const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
//     undefined, // no input
//     {
//       onSuccess: (data) => {
//         setSelectedTopic(selectedTopic ?? data[0] ?? null);
//       },
//     }
//   );

//   const createTopic = api.topic.create.useMutation({
//     onSuccess: () => {
//       void refetchTopics();
//     },
//   });

//   return (
//     <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
//       <div className="px-2">
//         <ul className="menu rounded-box w-56 bg-base-100 p-2">
//           {topics?.map((topic) => (
//             <li key={topic.id}>
//               <a
//                 href="#"
//                 onClick={(evt) => {
//                   evt.preventDefault();
//                   setSelectedTopic(topic);
//                 }}
//               >
//                 {topic.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className="divider"></div>
//         <input
//           type="text"
//           placeholder="New Topic"
//           className="input-bordered input input-sm w-full"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               createTopic.mutate({
//                 title: e.currentTarget.value,
//               });
//               e.currentTarget.value = "";
//             }
//           }}
//         />
//       </div>
//       <div className="col-span-3">
//         <div>
//           {/* {notes?.map((note) => (
//             <div key={note.id} className="mt-5">
//               <NoteCard
//                 note={note}
//                 onDelete={() => void deleteNote.mutate({ id: note.id })}
//               />
//             </div>
//           ))} */}
//         </div>

//         {/* <NoteEditor
//           onSave={({ title, content }) => {
//             void createNote.mutate({
//               title,
//               content,
//               topicId: selectedTopic?.id ?? "",
//             });
//           }}
//         /> */}
//       </div>
//     </div>
//   );
// };
