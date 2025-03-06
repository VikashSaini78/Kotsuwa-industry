const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("dotenv").config(); // Load environment variables

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Save files in 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage }).single("image"); // Accept 'image' field

// Email Controller with Image Upload
exports.queremailController = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("❌ Multer Upload Error:", err);
      return res.status(500).json({ error: "Image upload failed", details: err.message });
    }

    try {
      console.log("📩 Received email request:", req.body);

      // Ensure request body contains required fields
      const { name, contact, address, email, roadName, pincode, city, state, nearby } = req.body;

      if (!name || !contact || !address || !email || !roadName || !pincode || !city || !state || !nearby) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Image file path (if available)
      const imagePath = req.file ? req.file.path : null;

      // Create transporter with Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "sstylesavvy@gmail.com", // Fetch from .env file
          pass: "zoqgjtigucocvdzo", // Fetch from .env file
        },
      });

      // Define email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ["vikashbanskhoh@gmail.com", email], // Send to admin & user
        subject: "Order Confirmation",
        text: `Dear ${name},\n\nYour order has been received.\n\nDetails:\n- Contact: ${contact}\n- Address: ${address}, ${roadName}, ${city}, ${state} - ${pincode}\n- Nearby: ${nearby}\n\nThank you for shopping with us!\n\nBest Regards,\nStyle Savvy`,
        attachments: imagePath ? [{ filename: path.basename(imagePath), path: imagePath }] : [],
      };

      // Send email
      const info = await transporter.sendMail(mailOptions);

      console.log("✅ Email sent successfully:", info.response);
      res.status(200).json({ message: "Email sent successfully", info });

    } catch (error) {
      console.error("❌ Error sending email:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};

// Export upload middleware
exports.upload = upload;



// const nodemailer = require("nodemailer");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// require("dotenv").config();

// // Ensure uploads directory exists
// const uploadDir = path.join(__dirname, "../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Configure Multer for File Uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage }).single("image");

// exports.queremailController = async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       return res.status(500).json({ error: "Image upload failed", details: err.message });
//     }

//     console.log("📩 Received Body Data:", req.body);

//     try {
//       const { name, contact, email, productTitle, productCategory } = req.body;

//       if (!contact) {
//         return res.status(400).json({ error: "Field 'contact' is required" });
//       }

//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//          user: "sstylesavvy@gmail.com", // Fetch from .env file
//           pass: "zoqgjtigucocvdzo", // Fetch from .env file
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: ["vikashbanskhoh@gmail.com", email],
//         subject: "Order Confirmation - Style Savvy",
//         text: `Dear ${name}, Your order has been received. Contact: ${contact}`,
//       };

//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
// };

// exports.upload = upload;
