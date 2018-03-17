import SavingGroup from './models';

export const createSavingGroup = async (req, res) => {
  const { title, payment, description } = req.body;
  const newSavingGroup = new SavingGroup({ title, payment, description });

  try {
    return res.status(201).json({ savingGroup: await newSavingGroup.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Saving Group' });
  }
};

export const getAllSavingGroups = async (req, res) => {
  try {
    return res.status(200).json({ savingGroups: await SavingGroup.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Saving Group' });
  }
}

