import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Typography from '@mui/material/Typography';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable(pilots, ClosestDistance) {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pilots.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getClosestDistance = () => {
    if (ClosestDistance === null || ClosestDistance === undefined) 
        return

    let convertedDistance = (ClosestDistance.droneDistance / 1000).toFixed(2)

    return (
        <TableCell align="left" colSpan={1} >
            <Typography variant="subtitle3"> Closest confirmed distance to the nest is { convertedDistance } meters. </Typography>
        </TableCell>
    )
  }


  return (
    <TableContainer component={Paper} style={{width: '60%', height: '50%', margin: 'auto auto auto auto'} } >
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        
            <TableHead>
            <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">Distance</TableCell>
            </TableRow>
            </TableHead>

            <TableBody>
                {(rowsPerPage > 0
                    ? pilots.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : pilots
                ).map((pilot) => (
                    <TableRow key={pilot.droneSerialNumber}>
                    <TableCell component="th" scope="row">
                        {pilot.firstName} {pilot.lastName}
                    </TableCell>
                    <TableCell style={{ width: 100 }} >
                        {pilot.email}
                    </TableCell>
                    <TableCell style={{ width: 200 }} align="right">
                        {pilot.phoneNumber}
                    </TableCell>
                    <TableCell style={{ width: 170 }} align="right">
                        {(pilot.droneDistance / 1000).toFixed(1)}
                    </TableCell>
                    </TableRow>
                ))}
                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>

            <TableFooter>
                <TableRow>

                    { getClosestDistance() }

                    <TablePagination
                    colSpan={4}
                    count={pilots.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    ActionsComponent={TablePaginationActions}
                    />

                </TableRow>
            </TableFooter>
        </Table>
    </TableContainer>

  );
}
