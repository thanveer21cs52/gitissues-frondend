import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { data, replace, useNavigate } from "react-router-dom";

const CreateIssue: React.FC = (fn) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!title.trim() || !body.trim()) return; 
    await axios.post("http://localhost:3001/issues", { title, body });
  alert('issue craeted successfully')
  navigate(-1)
  };

  return (
    <div className="flex min-h-screen">
  
      <main className="flex-1 p-8 bg-gray-100">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-center">Create New Issue</h2>

          <div className="flex flex-col gap-2">
            <label className="font-medium">Title:</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter issue title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">Body:</label>
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              placeholder="Describe the issue..."
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Create Issue
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateIssue;
