import { Component , signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  Welcome = 'Hola';
  //Lista Strings
  tasks = signal([

    'Instalar el Angular CLI',
    'Crear Proyecto',
    'Crear componente',
    'Crear servicio'
  ]);
  name = signal('Saulin');
  age = 18;
  disabled = false;
  img = "https://picsum.photos/700/400?random";

  //Objetos
  person = {
  name: 'Saul',
    age: 27,
  avatar: 'https://i.pravatar.cc/150?img=3'
}
  //Metodo

  clickHandler() {
    alert("HOLA");
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement; //leer valor del input
    const newValue = input.value;
    this.name.set(newValue);
  }
  KeydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
