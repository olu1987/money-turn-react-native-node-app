export const fetchAllSavingGroups = () => 
  fetch('http://localhost:3000/api/saving-group')
    .then(res => res.json());