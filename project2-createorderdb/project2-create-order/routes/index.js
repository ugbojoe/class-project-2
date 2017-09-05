const express = require('express');
const ArtistRoutes = require('./artistRoutes');
const AlbumRoutes = require('./albumRoutes');
const CustomerRoutes = require('./customerRoutes');
const ProductRoutes = require('./productRoutes');
const ServicetypeRoutes = require('./servicetypeRoutes');
const OrderstageRoutes = require('./orderstageRoutes');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome!' });
});

app.use('/artists', ArtistRoutes);
app.use('/albums', AlbumRoutes);
app.use('/customer', CustomerRoutes);
app.use('/product', ProductRoutes);
app.use('/servicetype', ServicetypeRoutes);
app.use('/orderstage', OrderstageRoutes);

module.exports = app;
