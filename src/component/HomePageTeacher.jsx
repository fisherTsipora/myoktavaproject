import React from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../utils/UserUtil";
import { useState } from "react";

function HomePageTeacher() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleClickTeacher = async () => {
    const res = await getUsers();
    try {
      if (res) {
        console.log(res);
        navigate("allTeachers");
      } else {
        setError(error.message);
        console.log("page not found");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <span>שלום</span>
      <nav>
        <button onClick={handleClickTeacher}>מורים</button>
        <button>תלמידים</button>
        <button>אירעים</button>
        <button>תשלומים</button>
      </nav>
    </div>
  );
}

export default HomePageTeacher;
