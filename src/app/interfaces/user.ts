/*
  Los tipos de datos Interfaces de TypScript,
  son muy parecidos a una clase,
   en la que se definen propiedades
  internas que pueden ser de cualquiera
   de los otros tipos.
  Estas propiedades internas pueden definirse
  como obligatorias u opcionales usando el
  símbolo “”?"".
 */

 // definicion de interface, asimismo para los atributos con
 // el signo ->  ?  <- quiere decir que no es obligatorio recibir un valor
 export interface User {
    nick: string ;
    subnick?: string ;
    age?: number ;
    email: string ;
    friend: boolean ;
    uid: any ;
}
