import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SingleCoumnGridComponent = (props) => {

    useEffect(() => {
        console.log(props.data);
      }, []);
    return (
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {props.data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
};
export default SingleCoumnGridComponent;
