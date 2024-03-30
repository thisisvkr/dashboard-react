import { BsSearch } from 'react-icons/bs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ProductSell.css';
import abstract from '../assets/images/abstract.png';
import illustration from '../assets/images/illustration.jpg';
const createData = (
  imgUrl,
  productName,
  productDesc,
  stock,
  price,
  totalSales
) => {
  return { imgUrl, productName, productDesc, stock, price, totalSales };
};

const rows = [
  createData(
    abstract,
    'Abstract 3D',
    'Lorem ipsum dollar text sample',
    '32 in stock',
    '$ 44.99',
    '20'
  ),
  createData(
    illustration,
    'Sarphens Illustration',
    'Text sample Lorem ipsum dollar',
    '32 in stock',
    '$ 44.99',
    '20'
  ),
];

const ProductSell = () => {
  return (
    <div className='productSell'>
      <div className='up'>
        <h3 className='heading'>Product Sell</h3>
        <div className='right'>
          <div className='search'>
            <BsSearch />
            <input type='text' placeholder='Search' />
          </div>
          <div className='select'>
            <select name='range' id='range'>
              <option value='30days'>Last 30 Days</option>
              <option value='3months'>Last 3 Months</option>
            </select>
          </div>
        </div>
      </div>

      <div className='down'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} area-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align='left'>Stock</TableCell>
                <TableCell align='left'>Price</TableCell>
                <TableCell align='left'>Total Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.productName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <div className='product'>
                      <img src={row.imgUrl} alt='ProductImg' />
                      <div className='productInfo'>
                        <h4>{row.productName}</h4>
                        <p>{row.productDesc}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align='left'>{row.stock}</TableCell>
                  <TableCell align='left'>{row.price}</TableCell>
                  <TableCell align='left'>{row.totalSales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ProductSell;
