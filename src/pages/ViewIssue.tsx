import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";
import { Issue } from "../types/type";

const ViewIssue: React.FC = () => {
  const { number } = useParams<{ number: string }>();
  const [issue, setIssue] = useState<any| null>(null);

  useEffect(() => {
    if (number) {
      axios.get<Issue>(`http://localhost:3001/issues/${number}`)
        .then(res => setIssue(res.data));
    }
  }, [number]);

  if (!issue) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="flex min-h-screen">
   

      <main className="flex-1 p-8 bg-gray-100">
        <Link to="/"  className="inline-block mb-4 text-blue-600 hover:underline">
          &larr; Back to Issues
        </Link>

        <div className="bg-white p-6 rounded-xl  space-y-4">
          <h2 className="text-2xl font-bold">
            #{issue.number} <span className={`px-2 py-1 rounded text-sm font-medium ${issue?.state === "open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {issue.state.toUpperCase()}
            </span> {issue.title}
          </h2>

          <p className="text-gray-700">{issue.body}</p>

          <p className="text-gray-500 text-sm">Created by <span className="font-medium">{issue.user?.login}</span></p>

          <div className="flex gap-2">
            <Link to={`/edit/${issue.number}`}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">Edit Issue</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewIssue;
