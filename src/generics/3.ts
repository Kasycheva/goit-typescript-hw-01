function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB); 
  }
   
  const person = {
    name: 'John',
    age: 30,
  };
  
   const job = {
    position: 'Developer',
    salary: 5000,
  };
  
  const mergedObject = merge(person, job);
  console.log(mergedObject);
  