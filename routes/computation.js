const express = require('express');
const router = express.Router();

router.get('/computation', (req, res) => {
    const x = req.query.x ? parseFloat(req.query.x) : Math.random();
    const result1 = Math.atan(x);
    const result2 = Math.exp(x);
    const result3 = Math.expm1(x);
    const response = `
        Math.atan applied to ${x} is ${result1}
        Math.exp applied to ${x} is ${result2}
        Math.expm1 applied to ${x} is ${result3}
    `;
    res.send(response);
});

module.exports = router;
