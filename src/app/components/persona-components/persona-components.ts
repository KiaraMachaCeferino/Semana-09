import { Component, inject, signal } from '@angular/core';
import { Persona } from '../../interfaces/persona';
import { form, min, required, FormField } from '@angular/forms/signals';
import { PersonaService } from '../../services/persona.service';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-persona-components',
  styleUrl: './persona-components.css',
  templateUrl: './persona-components.html',
})
export class PersonaComponents {
  
  private personaService= inject(PersonaService)

  listaPersonas: Persona[]=[]

  private personaModelo = signal<Persona>({
    nombre: '', 
    edad: 0})

    personaFormulario= form(this.personaModelo, (esquema)=>{
    required(esquema.nombre, {message: 'El nombre es obligatorio'})
    required(esquema.edad, {message: 'La edad es obligatoria'})
    min(esquema.edad, 10, {message:'La edad minima es de 10 años'})
    })

    constructor(){
      this.mostrar()
    }

  guardar(evento:Event){
    evento.preventDefault()
    let persona={
      'nombre': this.personaModelo().nombre,
      'edad': this.personaModelo().edad
    }
    this.personaService.guardar(persona)
    Swal.fire({
    title: "Registro Guardado",
    text: "SE guardo de manera satisfactoria",
    icon: "success"
    });

    this.limpiar()
  }

  limpiar(){
    this.personaModelo.set({nombre:'', edad: 0})
  }

  mostrar(){
    this.listaPersonas= this.personaService.mostrar()
  }
}
