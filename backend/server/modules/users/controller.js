import User from './model';

export const createUser = async (req, res) => {
  const { fullName, userName, address, dob } = req.body;
  const newUser = new User({ fullName, userName, address, dob });

  try {
    return res.status(201).json({ savingGroup: await newUser.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Saving Group' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    return res.status(200).json({ users: await User.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Saving Group' });
  }
};