import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import { Issue } from "../types/type";
import { useLocation } from "react-router-dom";
import { data, replace, useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const [issues, setIssues] = useState<any[]>([]);
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");
  const [loading, setLoading] = useState<boolean>(false);
   const location = useLocation();
     const navigate = useNavigate();

  const fetchIssues = async (state: string = "all") => {
    setLoading(true);
    try {
      const res = await axios.get<Issue[]>(
        `http://localhost:3001/issues?state=${state}`
      );
      setIssues(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
 
useEffect(() => {
  fetchIssues(filter);
}, [filter, location.key])

  return (
    <div className="flex min-h-screen">
 
      <main className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Issues</h2>
        
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors" onClick={()=>navigate('/create')}>
              Create New Issue
            </button>
         
        </div>

       
        <div className="flex gap-4 mb-6">
          {["all", "open", "closed"].map((state) => (
            <button
              key={state}
              onClick={() => setFilter(state as "all" | "open" | "closed")}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === state
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {state.charAt(0).toUpperCase() + state.slice(1)}
            </button>
          ))}
        </div>

     
        {loading ? (
          <h1 className="text-xl font-semibold text-center">Loading...</h1>
        ) : issues.length === 0 ? (
          <h2 className="text-center text-gray-500">No issues found</h2>
        ) : (
          <div className="space-y-4">
            {issues.map((issue) => (
              <div
                key={issue.number}
                className="bg-white p-6 rounded-xl shadow-md space-y-2"
              >
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  #{issue.number}
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      issue.state === "open"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {issue.state.toUpperCase()}
                  </span>
                  {issue.title}
                </h3>
                <p className="text-gray-700">{issue.body}</p>
                <p className="text-gray-500 text-sm">
                  Created by{" "}
                  <span className="font-medium">{issue.user?.login}</span> •{" "}
                  {issue.comments} comments
                </p>

                <div className="flex gap-2 mt-2">
                  <Link to={`/view/${issue.number}`}>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md transition-colors">
                      View
                    </button>
                  </Link>
                  <Link to={`/edit/${issue.number}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition-colors">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
