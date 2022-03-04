import React, { useReducer, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Snackbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import theme from "../theme";
import { Autocomplete } from "@mui/material";

const AddAdvisoryComponent = () => {
  const initialState = {
    msg: "",
    snackBarMsg: "",
    contactServer: false,
    countries: [],
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  const [travelersName, setTravelersName] = useState("");
  const [countryOfChoice, setCountryOfChoice] = useState("");

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({
      msg: "",
      contactServer: false,
    });
  };

  const fetchCountries = async () => {
    try {
      setState({
        contactServer: true,
        snackBarMsg: "Running Setup...",
      });

      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ query: "query{countries}" }),
      });
      let json = await response.json();

      setState({
        contactServer: true,
        countries: json.data.countries,
      });
    } catch (error) {
      console.log(error);
      setState({
        msg: `Problem loading server data - ${error.message}`,
      });
    }
  };

  // const addAdvisory = async () =>{
  //   let response = await fetch("http://localhost:5000/graphql", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //     body: JSON.stringify({ query: `mutation($name: String, $country: String, $text: String, $date: String) {
  //       addAdvisory(name: $name, country: $country, text: $text, date: $date ) {name,country, text, date} 
  //       }
  //       ` }),
  //     variables: JSON.stringify({ name: travelersName, country: countryOfChoice, text: "fake text", date: "dake date"}),
  //   });
  //   let json = await response.json();

  // };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Card style={{ marginTop: "10vh" }}>
        <CardHeader
          title="Add Travel Advisory"
          style={{ color: theme.palette.primary.main, textAlign: "center" }}
        />
        <CardContent>
          <Typography align="center">
            <img
              className="logo"
              src={require("../logo.png")}
              alt={"Airplane logo"}
            />
          </Typography>

          {/*https://medium.com/swlh/usereducer-form-example-16675fa60229*/}
          <TextField
            value={travelersName}
            onChange={setTravelersName}
            label="Traveler's Name"
          />
          <Autocomplete
            options={state.countries}
            value={countryOfChoice}
            onChange={setCountryOfChoice}
            renderInput={(params) => <TextField {...params} label="Country" />}
          />

          {/* <Button onClick={addAdvisory}>ADD ADVISORY</Button> */}
        </CardContent>
      </Card>
      <Snackbar
        open={state.contactServer}
        message={state.snackBarMsg}
        autoHideDuration={3000}
        onClose={snackbarClose}
      />
    </ThemeProvider>
  );
};
export default AddAdvisoryComponent;
