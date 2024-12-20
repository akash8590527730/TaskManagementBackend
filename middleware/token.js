const jwt = require('jsonwebtoken');

const token = (req, res, next) => {
  
  const token = req.header('Authorization')?.replace('Bearer ', '');

  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    
    console.error('Token verification failed:', error);  
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = token;
