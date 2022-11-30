import axios from "axios";
import { useEffect, useState } from "react";
const useJobs = () => {
  const [jobs, setJobs] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/jobs");
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return [jobs, setJobs];
};
export default useJobs;
