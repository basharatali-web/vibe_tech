export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // ⚙️ یہاں آپ مستقبل میں database یا Payoneer API وغیرہ connect کریں گے
    return res.status(200).json({ message: 'Signup successful', user: { name, email } });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
