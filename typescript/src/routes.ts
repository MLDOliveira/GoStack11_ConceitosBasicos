import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Mateus',
    email: 'mateus@gmail.com',
    password: '123456',
    techs: ['React', { title: 'Javascript', expirence: 100}]
  })

  return response.json(user);
}