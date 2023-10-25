import { Avatar, Box, Button, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteProduct, findProducts } from '../../state/Product/Action';
import { useDispatch, useSelector } from 'react-redux';

const ProductsTable = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((store) => store)
  const [deletedProductId, setDeletedProductId] = useState(null); // State to track deleted product

  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 10,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [dispatch,products.deleteProduct]); // Add any dependencies that you need here

  const handleDeleteProduct = (productId) => {
    console.log("delete product ", productId);
    dispatch(deleteProduct(productId));
    setDeletedProductId(productId); // Update the deleted product ID
  }

  // Filter out the deleted product from the displayed products
  // const filteredProducts = products?.products?.content?.filter(
  //   (item) => item._id !== deletedProductId
  // );

  return (
    <div className='p-5'>
      <Card className=''>
        <CardHeader title="All Products"/>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.products?.content?.map((item) => (
              <TableRow
                hover
                key={item.name}
                sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
              >
                <TableCell>
                  {" "}
                  <Avatar alt={item.titel} src={item.imageUrl} />{" "}
                </TableCell>

                <TableCell
                  sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "0.875rem !important",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="caption">{item.brand}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>{item.category.name}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{item.discountedPrice}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{item.quantity}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Button variant="text" onClick={() => handleDeleteProduct(item._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
    </div>
  )
}

export default ProductsTable;
