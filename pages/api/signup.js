export default function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    return res.status(200).json({
      message: 'Signup successful (demo mode)',
      user: { name, email },
    });

  } catch (error) {
    console.error('Signup API Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
