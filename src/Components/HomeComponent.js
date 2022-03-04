import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import "../App.css";

const HomeComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card style={{ marginTop: "10%" }}>
        <CardHeader
          title="Home Page"
          style={{ color: theme.palette.primary.main, textAlign: "center" }}
        />
        <CardContent>
          <br />
          <Typography align="center"><img className="logo" src={require("../logo.png")} alt={"Airplane logo"}/></Typography>

          <Typography
            color="primary"
            style={{ float: "right", paddingRight: "1vh", fontSize: "smaller" }}
          >
            &copy;Info3139 - 2022
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
export default HomeComponent;
