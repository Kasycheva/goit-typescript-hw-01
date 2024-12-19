import axios from 'axios';


async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url); 
    return response.data;
  } catch (error: unknown) {
   
    if (error instanceof Error) {
      throw new Error(`Error fetching from ${url}: ${error.message}`);
    } else {
      throw new Error(`Unknown error occurred while fetching from ${url}`);
    }
  }
}


interface User {
  id: number;
  name: string;
  email: string;
}


async function getUserData() {
  try {
    const userData = await fetchData<User>('https://jsonplaceholder.typicode.com/users/1');
    console.log("Single User Data:");
    console.log(userData);
  } catch (error) {
    console.error("Failed to fetch single user data:", error);
  }
}


async function getAllUsers() {
  try {
    const users = await fetchData<User[]>('https://jsonplaceholder.typicode.com/users');
    console.log("All Users Data:");
    console.log(users);
  } catch (error) {
    console.error("Failed to fetch all users:", error);
  }
}


getUserData();
getAllUsers();
