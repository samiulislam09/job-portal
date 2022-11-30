import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function AccordianDetails({ jobName, index, id }) {
  return (
    <AccordionDetails
      sx={{
        display: "flex",
        justifyContent: "space-between",
        background: "#fff",
        margin: "10px",
      }}
    >
      <Typography>{jobName}</Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button>
          <DeleteIcon></DeleteIcon>
        </Button>
        <Link to={`/updatejobsdata/${id}/${index}`}>
          <EditIcon></EditIcon>
        </Link>
      </div>
    </AccordionDetails>
  );
}

export default AccordianDetails;
