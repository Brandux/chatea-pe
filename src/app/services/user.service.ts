import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

// Esto es un servicio, para generarlo se utiliza el comando ng generate service 'nemeCarpeta'/'nameService'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];

  constructor() { 
    let myUser: User = {
      nick: 'Brandukosky',
      subnick: 'Brandux',
      age: 20,
      email: 'brandx@upeu.edu.pe',
      friend: true,
      uid: 10
    };
    let usuario1: User = {
      nick: 'Eduardo',
      age: 24,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 1
    };
    let usuario2: User = {
      nick: 'Freddy',
      age: 28,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 2
    };
    let usuario3: User = {
      nick: 'Yuliana',
      age: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 3
    };
    let usuario4: User = {
      nick: 'Ricardo',
      age: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 4
    };
    let usuario5: User = {
      nick: 'Marcos',
      age: 30,
      email: 'marcos@aoe.aoe',
      friend: false,
      uid: 5
    };
    this.friends = [myUser, usuario1, usuario2, usuario3, usuario4, usuario5] ;
  }
  // metodo para regresar toda la lista de Usuarios
  getFriend() {
    return this.friends;
  }
}
