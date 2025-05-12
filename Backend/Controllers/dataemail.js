const nodemailer = require("nodemailer");
require("dotenv").config();

exports.queremailController = async (req, res) => {
    try {
        console.log("📩 Received email request:", req.body);

        // Required fields validation
        const requiredFields = ["name", "email", "phone", "productType", "dimension", "color", "artwork", "organisation", "deliveryDate", "requirement"];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            console.error(" Missing fields:", missingFields);
            return res.status(400).json({ error: `Missing fields: ${missingFields.join(", ")}` });
        }

        // Create email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sstylesavvy@gmail.com", // Fetch from .env file
                pass: "zoqgjtigucocvdzo", // Fetch from .env file
            },
        });

        // Construct email content dynamically
        const emailContent = `
            Dear ${req.body.name},

            Your order for ${req.body.productType} has been received.

            🔹 **Order Details:**
            - 📞 Phone: ${req.body.phone}
            - 📏 Dimension: ${req.body.dimension}
            - 🎨 Color: ${req.body.color}
            - 🖌️ Artwork: ${req.body.artwork}
            - 🏢 Organisation: ${req.body.organisation}
            - 📅 Delivery Date: ${req.body.deliveryDate}
            - 📜 Requirement: ${req.body.requirement}

            Thank you for choosing kotsuwai ndustry! We will process your order soon.

            Best Regards,  
            **kotsuwa industry Team**  
        `;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: ["kotsuwaindustry@gmail.com", req.body.email], // Send email to both admin & user
            subject: "Order Confirmation - kotsuwai ndustry",
            text: emailContent, // Send as plain text
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully:", info.response);
        res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {
        console.error("❌ Internal Server Error:", error.message);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
