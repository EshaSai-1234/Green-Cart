 Backend: Stripe Payment Integration
 // routes/checkout.js
 const express = require('express');
 const router = express.Router();
 const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 router.post('/checkout', async (req, res) => {
  const { items } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: 'https://your-site.com/success',
    cancel_url: 'https://your-site.com/cancel',
  });
  res.json({ id: session.id });
 });
 module.exports = router;
