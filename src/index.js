const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact.routes');
const newsletterRoutes = require('./routes/newsletter.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin: '*'
}));

app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
