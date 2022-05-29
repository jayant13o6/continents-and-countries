import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import "../../src/index.css";
import LinearProgress from "@mui/material/LinearProgress";

const Countries = () => {
  const params = useParams();

  // queries:

  const continent = gql`
    query continent($code: ID!) {
      continent(code: $code) {
        code
        name
      }
    }
  `;
  const listOfCountries = gql`
    query listOfCountries($code: String!) {
      countries(filter: { continent: { eq: $code } }) {
        code
        name
        capital
        currency
        languages {
          name
        }
      }
    }
  `;

  const {
    data: continentData,
    loading2,
    error2,
  } = useQuery(continent, {
    variables: { code: params.id },
  });
  if (continentData) {
    console.log("data here", continentData);
  }
  const { data, loading, error } = useQuery(listOfCountries, {
    variables: { code: params.id },
  });
  if (loading || loading2) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }
  if (error2 || error) {
    return (
      <div>
        {error2},{error}
      </div>
    );
  }
  return (
    <div>
      <h2>
        Welcome to {`${continentData.continent.name}`} (
        {`${continentData.continent.code}`})
        <a href="/" style={{ fontSize: "15px", marginLeft: "10px" }}>
          GO Back
        </a>
      </h2>

      <table>
        <caption>
          <b>Countries in this continent:</b>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Currency</th>
            <th>languages</th>
          </tr>
        </thead>
        <tbody>
          {data.countries.map((ele) => (
            <tr key={ele.code}>
              <td>{ele.name}</td>
              <td>{ele.capital}</td>
              <td>{ele.currency}</td>
              <td>
                {ele.languages.map((ele) => (
                  <p>{ele.name}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Countries;
