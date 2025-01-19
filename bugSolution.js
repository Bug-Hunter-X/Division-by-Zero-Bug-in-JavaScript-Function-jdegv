function myFunction(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b; 
  } catch (error) {
    console.error('Error:', error.message);
    return NaN; // Or handle the error as needed
  }
}