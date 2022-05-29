import React, { useState } from "react";
import "../../src/index.css";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LinearProgress from "@mui/material/LinearProgress";

const Continents = () => {
  const [continent, setContinent] = useState("");
  const navigate = useNavigate();

  // queries
  const fetchContinents = gql`
    query continents {
      continents {
        code
        name
      }
    }
  `;

  const { data, loading, error } = useQuery(fetchContinents);
  if (loading) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  } else {
    console.log(data);
  }

  //handlers
  const handleChange = (e, id) => {
    console.log(id.props.children[0]);
    setContinent(e.target.value);
    navigate(`/continent/${id.props.children[0]}`);
  };

  return (
    <div>
      <h1>List of Continents</h1>

      <FormControl sx={{ width: "50%" }}>
        <InputLabel id="demo-select-small">Select a Continent</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={continent}
          label="Continent"
          onChange={(e, id) => handleChange(e, id)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.continents.map((ele) => (
            <MenuItem key={ele.code} value={ele.name}>
              {ele.code}: {ele.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Continents;
