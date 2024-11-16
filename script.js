// Get the display element
const display = document.getElementById('display');

// Define a variable to store the current calculation
let calculation = '';

// Add event listeners to buttons
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // Handle special cases
    if (value === 'C') {
      calculation = '';
      display.textContent = '';
    } else if (value === '=') {
      try {
        const result = eval(calculation);
        display.textContent = result;
        calculation = result.toString();
      } catch (error) {
        display.textContent = 'Error';
      }
    } else {
      calculation += value;
      display.textContent = calculation;
    }
  });
});
