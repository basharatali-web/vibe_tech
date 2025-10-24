// pages/api/signup.js
export default function handler(req, res) {
  // صرف POST قبول کریں
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    const body = req.body ?? {};
    // مثال کے طور پر required fields چیک کریں (ایڈجسٹ کریں حسبِ ضرورت)
    if (!body.email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // --- یہاں بجائے حقیقی پیمنٹ یا پیچیدہ لاجک کے ---
    // آپ اصل سرور/DB/Payoneer integration یہاں asynchronous کال رکھ سکتے ہیں،
    // مگر build کے وقت یہ function run نہیں ہوتا (صرف request پر)۔

    // dummy response:
    return res.status(201).json({
      message: 'Signup received (demo).',
      received: { email: body.email }
    });
  } catch (err) {
    console.error('signup api error', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
