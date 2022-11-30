import React from "react";
import Accordian from "../components/Accordian";
import useJobs from "../hooks/useJobs";

function Home() {
  const [jobs] = useJobs();
  console.log(jobs);
  return (
    <div>
      {jobs?.map((job) => (
        <Accordian key={job._id} job={job} />
      ))}
    </div>
  );
}

export default Home;
