function showMessage(message: string): void {
    console.log(message);
  }
  
  showMessage("Hello, TypeScript!"); 
  
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  const result = calc(5, 10); 
  console.log(result);
  
  function customError(): never {
    throw new Error('Error');
  }
  
  try {
    customError();
  } catch (error) {
    console.error(error);
  }
  