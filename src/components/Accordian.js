import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AccordianDetails from "./AccordianDetails";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import axios from "axios";
import useJobs from "../hooks/useJobs";

export default function Accordian({ job }) {
  const [jobs, setJobs] = useJobs([]);
  const deleteCat = async (id) => {
    const proced = window.confirm("wanna delete this field");
    if (proced) {
      const uri = `http://localhost:5000/removejobs/${id}`;
      const res = await axios.delete(uri);
      if (res.status === 200) {
        const remaining = jobs.filter((job) => job._id !== id);
        setJobs(remaining);
        console.log("rem", remaining);
      }
    }
  };
  return (
    <div>
      <Accordion sx={{ marginBottom: "10px", background: "#F5F5F5" }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{job.title}</Typography>
          <Link to={`/updatejobs/${job._id}`}>
            <EditIcon sx={{ marginLeft: "10px" }} />
          </Link>
          <Button onClick={() => deleteCat(job._id)}>
            <Delete />
          </Button>
        </AccordionSummary>
        {job?.jobs?.map((jobName, i) => (
          <AccordianDetails key={i} id={job._id} index={i} jobName={jobName} />
        ))}
      </Accordion>
    </div>
  );
}
