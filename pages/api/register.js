
import dbConnect from '@/lib/mongodb';
import Registration from '@/lib/models/Registration';

// for the regiastration

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    await dbConnect();
    const newEntry = await Registration.create(req.body);
    res.status(201).json({ success: true, data: newEntry });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
    
  }
}
