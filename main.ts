import{Persona} from './Persona';
import{Direccion} from './Direccion';
import {Mail} from "./Mail";
import {Telefono} from "./Telefono";

let direccionAna = new Direccion("Avenida Complutense", 30, 1, "A", 28040, "Madrid", "Madrid");
let mailAna = new Mail("trabajo", "ana43@uni.es");
let telfAna = new Telefono("trabajo", 607952456);

let direccionJavier = new Direccion("María de Molina", 5, 3, "C", 28042, "Madrid", "Madrid");
let mailJavier = new Mail("trabajo", "javier.ruiz@uni.es");
let telfJavier = new Telefono("trabajo", 687035265);

let direccionEdu = new Direccion("José Abascal", 45, 7, "B", 28020, "Madrid", "Madrid");
let mailEdu = new Mail("personal", "edu@gmail.com");
let telfEdu = new Telefono("personal", 633587421);

let Ana = new Persona("Ana", "Jiménez Fernández", 43, "25678549-Z", "01-01-1973", "negro", "mujer", direccionAna, mailAna, telfAna, "profesora");
let Javier = new Persona("Javier", "García Hernández", 23, "85215756-Y", "01-01-1993", "amarillo", "hombre", direccionJavier, mailJavier, telfJavier, "alumno");
let Edu = new Persona("Eduardo", "Martín Álvarez", 55, "51387952-F", "01-01-1971", "verde", "hombre", direccionEdu, mailEdu, telfEdu, "profesor");

let listaPersonas: Persona[] = [Ana, Javier, Edu];

//console.log("Datos guardados: "+  "\n" + Ana.listaPersonas() + Javier.listaPersonas() + Edu.listaPersonas());

for (let i = 0; i< listaPersonas.length; i++){
    console.log(listaPersonas[i]);
}

let direccionJavierMod = new Direccion("Paseo de la Castellana", 51, 2, "A", 28001, "Madrid", "Madrid");
let mailJavierMod = new Mail("personal", "javier.ruiz@gmail.com");
let telfJavierMod = new Telefono("personal", 666035265);

let personaDNI : Persona = listaPersonas.filter( p => p.dni == "85215756-Y")[0];

personaDNI.direcciones.push(direccionJavierMod);
personaDNI.mails.push(mailJavierMod);
personaDNI.telefonos.push(telfJavierMod);

console.log("Tras la búsqueda del DNI, se muestran los resultados con los datos añadidos: " + "\n")

for (let i = 0; i< listaPersonas.length; i++){
    console.log(listaPersonas[i]);
}




