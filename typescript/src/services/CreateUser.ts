interface TechObject {
  title: string, 
  expirence: number;
}

interface CreateUserData {
  name?: string, 
  email: string, 
  password: string;
  techs: Array<string | TechObject>
  // techs: string[]
}

export default function createUser(user: CreateUserData){
  return user;
}