import React, { useReducer, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Snackbar,
  Typography,
  Autocomplete,
  TextField
} from "@mui/material";
import theme from "../theme";
import SingleCoumnGridComponent from "./SingleColumnGridComponent";

const AlertComponent = () => {
 
  const initialState = {
    msg: "",
    snackBarMsg: "",
    contactServer: false,
    resultsArray: [],
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  
  useEffect(() => {
    resetAlerts();
  }, []);
  
  const resetAlerts = async () => {
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
        body: JSON.stringify({ query: "query{setupAlerts{results}}" }),
      });
      let json = await response.json();
      
      setState({
        contactServer: true,
        resultsArray: json.data.setupAlerts.results.replace(/([.])\s*(?=[A-Z])/g, "$1|").split("|"),
      });

    } catch (error) {
      console.log(error);
      setState({
        msg: `Problem loading server data - ${error.message}`,
      });
    }
  };

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      msg: ``,
      contactServer: false,
    });
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Card style={{ marginTop: "10vh" }}>
        <CardHeader
          title="Alert Setup Details"
          style={{ color: theme.palette.primary.main, textAlign: "center" }}
        />  
        <CardContent>
        <Typography align="center"><img className="logo" src={require("../logo.png")} alt={"Airplane logo"}/></Typography>

        <SingleCoumnGridComponent data={state.resultsArray}/>
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
export default AlertComponent;
