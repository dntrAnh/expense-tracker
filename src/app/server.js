// const express = require('express');
// const multer = require('multer');
// const request = require('request');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.post('/api/receipt-ocr', upload.single('receipt'), (req, res) => {
//   const receiptOcrEndpoint = 'https://ocr.asprise.com/api/v1/receipt';
//   const imageFile = req.file.path;

//   request.post({
//     url: receiptOcrEndpoint,
//     formData: {
//       client_id: 'TEST',
//       recognizer: 'auto',
//       ref_no: 'ocr_nodejs_123',
//       file: fs.createReadStream(imageFile)
//     },
//   }, (error, response, body) => {
//     fs.unlinkSync(imageFile); // Delete the file after processing
//     if (error) {
//       return res.status(500).json({ success: false, error });
//     }
//     const result = JSON.parse(body);
//     if (result.error) {
//       return res.status(500).json({ success: false, error: result.error });
//     }

//     // Assuming the receipt data is in the format you need
//     const { items, totalAmount, date } = result;
//     const name = items[0].description;
//     const price = totalAmount;
//     res.json({ success: true, name, price, date });
//   });
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });