import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DatosService } from '../services/datos';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonInput, IonItem, FormsModule ],
})
export class Tab1Page {
  
  nombre='';
  contador=0;
  mensaje='';
  cantidad=0;
  precioUnitario = 0.0;

  private datos = inject(DatosService);
  private router = inject(Router);

  aumentar2(): void {
    this.cantidad ++;
  }
  disminuir2(): void {
    this.cantidad --;
  }
  reiniciar2(): void {
    this.cantidad = 0;
  }
  
  enviar(): void {
    const nombreLimpio = this.nombre.trim();
    const subtotal = this.cantidad * this.precioUnitario;
  
    if (!nombreLimpio) {
      this.mensaje = 'Ingresa el nombre del producto antes de continuar.';
      return;
    }
    if (!this.precioUnitario) {
      this.mensaje = 'Ingresa el precio unitario antes de continuar.';
      return;
    }
    if (this.cantidad <= 0) {
      this.mensaje = 'Ingresa la cantidad antes de continuar.';
      return;
    }
    this.mensaje='';
    this.datos.guardar(nombreLimpio, this.cantidad, this.precioUnitario, subtotal );
    this.router.navigateByUrl('/tabs/tab2');
  }

}
