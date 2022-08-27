import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'train';
  trainName = 'Garibhrath Pune Express[12120]';
  avalTicket = 136;

  bookTicket(){
    console.log("you clicked on book ticket")
    this.avalTicket--;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  cancelTicket(){
    console.log("you cliked on cancel ticket")
    this.avalTicket++;
  }
}
