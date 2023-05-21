const express = require('express');
const Dao = require('./path/to/Dao'); // Assuming you have the Dao module implemented

const app = express();
const port = 3000;

app.get('/DeleteProductInfo', (req, res) => {
  const productId = req.query.productid;
  const dao = new Dao();
  const status = dao.deleteProduct(productId);

  if (status > 0) {
    res.status(200).send('Product deleted successfully');
  } else {
    res.status(200).send('Product is not deleted');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});