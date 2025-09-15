import React, { useState } from "react";
import NavBar from "../components/Nav";

const Login: React.FC = () => {
  const [token, setToken] = useState<string>("");

function handletoken(e:any){
    const token=e.target.token.value
   alert("Token saved! Now you can access GitHub API." + token);

  }



  return (
    <div className="flex justify-center items-center min-h-screen ">
  
      
  

<form 
  onSubmit={handletoken} 
  className="max-w-md mx-auto mt-20 p-8 bg-gray-900 text-white rounded-xl shadow-lg flex flex-col gap-6"
>
  <h3 className="text-xl font-semibold text-center">Enter Personal Access Token</h3>

  <input
    type="text"
    placeholder="Enter your token"
    value={token}
    onChange={(e) => setToken(e.target.value)}
    name="token"
    className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button 
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors"
  >
    Save Token & Continue
  </button>
</form>

    </div>
  );
};

export default Login;
