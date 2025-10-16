export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // فرضی ڈیٹا اسٹور (بعد میں ڈیٹا بیس کنکشن لگایا جا سکتا ہے)
    const user = {
      id: Date.now(),
      name,
      email,
      password
    };

    console.log('New user signed up:', user);

    return res.status(201).json({ message: 'User signed up successfully', user });
  } catch (error) {
    console.error('Error in signup API:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
