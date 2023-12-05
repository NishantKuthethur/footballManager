import Papa from 'papaparse';

export const parseCSV = (file, setError) => {
  return new Promise((resolve, reject) => {
  Papa.parse(file, {
    complete: (result) => {
      const { data, errors } = result;
      if (errors.length > 0) {
        setError('Error parsing CSV file.');
        reject(errors);
        return;
      }

      // Assuming the first row of data are headers and actual data starts from the second row
      const [headers, ...rows] = data;

      // Check for empty values in CSV data
      const hasEmpty = rows.some(row => row.some(cell => {
        const cellValue = cell !== null && cell !== undefined ? cell.toString() : '';
        return cellValue.trim() === '';
      }));
      if (hasEmpty) {
        setError('Your sheet is missing data. Please ensure all cells are filled out.');
        reject();
      }

      // Map each row into a player object with fields from the CSV headers
      const players = rows.map((row, index) => {
        const player = { id: index + 1 }; // Assign a sequential ID starting from 1
        headers.forEach((header, headerIndex) => {
          const cell = row[headerIndex];
          player[header.trim()] = cell !== null && cell !== undefined ? cell.toString().trim() : '';
        });
        return player;
      });
      
      //setRoster(players);
      resolve(players);
    },
    header: false, // Set to false because we manually handle headers
    skipEmptyLines: true,
    dynamicTyping: true,
  });
});
};
