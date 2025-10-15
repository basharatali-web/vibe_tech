export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body || {};

      if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Example success response
      return res.status(200).json({
        success: true,
        message: 'Signup successful!',
        user: { name, email },
      });
    } catch (error) {
      console.error('Error in signup API:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Handle other HTTP methods
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
