// main.js

import { colorTexting } from './utils.js'; // Adjust the path as necessary

// Call the imported function immediately (optional)
colorTexting();

// Call the imported function repeatedly every 3 seconds (3000 milliseconds)
const intervalId = setInterval(colorTexting, 3000);

