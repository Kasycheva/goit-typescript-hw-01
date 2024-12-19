type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  function createOrUpdateUser(initialValues: Partial<User>): void {
    console.log('User updated with:', initialValues);
    
  }
 
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });
  
  createOrUpdateUser({
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@mail.com',
    password: 'securepass',
  });
  