import axios from "axios";
import { useEffect, useState } from "react";

const useUserData = () => {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await axios
          .post("http://localhost:5000/userData", { token })
          .then((res) => {
            setUser(res.data);
          });
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [token]);
  return [user, setUser];
};
export default useUserData;
