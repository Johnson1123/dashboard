import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './ListTable.scss'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Johnson', 159, 6.0, 24, 'Completed'),
  createData('Tosin', 237, 9.0, 37, "Pending"),
  createData('Usman', 262, 16.0, 24, 'Failed'),
  createData('Ruth', 305, 3.7, 67, 'Pending'),
  createData('Damilola', 356, 16.0, 49, "Completed"),
];

export default function ListTable() {
  return (
    <TableContainer component={Paper} className='box-shadow'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Shipped</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" className='tableCell'>{row.calories}</TableCell>
              <TableCell align="right" className='tableCell'>{row.fat}</TableCell>
              <TableCell align="right" className='tableCell'>{row.carbs}</TableCell>
              <TableCell align="right" className={`tableCell`}><p className='status'><span className={`${row.protein} `}>{row.protein}</span></p></TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
