type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };
  
  type Params = Omit<Form, 'errors'>;
  
  const form: Form = {
    email: 'user@mail.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
    errors: {
      email: ['Invalid email'],
    },
  };
  
  const params: Params = {
    email: 'user@mail.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
  };
  
  console.log(params);
  