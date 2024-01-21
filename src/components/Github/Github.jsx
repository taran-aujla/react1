import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Github() {
  const { userr } = useParams();
  const [val, setVal] = useState([]);

  useEffect(() => {
    function fetchUserData(username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((userData) => setVal(userData))
        .catch((error) => console.error("Error fetching user data:", error));
    }

    fetchUserData(userr);
  }, [userr]);

  return (
    <div className="h-20 p-5 bg-slate-700 text-3xl text-orange-600 flex align-middle justify-center">
      Github: {val?.followers ?? "Loading..."}
    </div>
  );
}

export default Github;
