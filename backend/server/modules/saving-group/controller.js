import SavingGroup from './model';

export const createSavingGroup = async (req, res) => {
  const { title, payment, description, member } = req.body;
  const newSavingGroup = new SavingGroup({ title, payment, description, member });

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
};

export const addMember = async (req, res) => {
  const { groupId } = req.params;
  console.log(groupId);
  try {
    return res.status(200).json({ savingGroups: await SavingGroup.findOne({ _id: groupId }) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Saving Group' });
  }
};


