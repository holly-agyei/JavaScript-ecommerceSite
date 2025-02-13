const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Send email function using Nodemailer
const sendConfirmationEmail = (name, email, date, time) => {
    const transporter = nodemailer.createTransport({
        service: "gmail", // You can use any email service
        auth: {
            user: "your-email@gmail.com", // Your email
            pass: "your-email-password", // Your email password (consider using OAuth2 for security)
        },
    });

    const mailOptions = {
        from: "your-email@gmail.com",
        to: email,
        subject: "Booking Confirmation",
        text: `Hello ${name},\n\nYour booking for ${date} at ${time} has been confirmed.\n\nThank you!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

// Endpoint to handle booking form submission
app.post("/book", (req, res) => {
    const { name, email, date, time } = req.body;

    // Send confirmation email
    sendConfirmationEmail(name, email, date, time);

    // Respond with success
    res.json({ message: "Booking confirmed!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-inter
