import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/UserUtil";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../features/userSlice";
import { useEffect } from "react";
import { userSlice } from "../features/userSlice";

function LogInRegister() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const logedUser = useSelector((state) => state.user.logedUser);

  useEffect(() => {
    setPassword("");
    setId("");
  }, [error]);

  const handleClickLoginManager = async (e) => {
    e.preventDefault();
    if (id == "" || password == "") {
      setError("חובה למלא את השדות");
    }
    try {
      const res = await login(id, password);
      if (res.status === 200) {
        console.log(res);
        dispatch(setLoggedUser(res.data));
        if (res.data.level == 1) {
          navigate("/homePageManager");
        } else {
          navigate("/homePageTeacher");
        }
      } else {
        setError("אחד הפרטים שגויים");
      }
    } catch (error) {
      setError(error.message);
      dispatch(setLoggedUser(null)); //Null שרוצים לרוקן את המשתמש המחובר - זה אובייקט לכן נשלח
      console.log(error.message);
    }
  };

  const handleChangeId = (event) => {
    setError("");
    let value = event.target.value;
    setId(value);
  };

  const handleChangePassword = (event) => {
    setError("");
    let value = event.target.value;
    setPassword(value);
  };

  return (
    <>
      <form>
        <h3>כניסת מנהל</h3>
        <label htmlFor="teacherId">הכנס מספר ת"ז</label>
        <input
          type="text"
          value={id}
          placeholder="תעודת זהות"
          onChange={handleChangeId}
          name="id"
        />
        <br />

        <label htmlFor="password">הכנס סיסמה</label>
        <input
          type="password"
          placeholder="סיסמה"
          onChange={handleChangePassword}
          name="password"
          value={password}
        />
        <br />
        {error != "" ? (
          <>
            <span>{error}</span>
            <br />
          </>
        ) : null}
        {/* {error != "" && <><span>{error}</span><br/></>} */}
        <button onClick={handleClickLoginManager}>התחבר</button>
      </form>
    </>
  );
}

export default LogInRegister;
