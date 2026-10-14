import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DatosService } from '../services/datos';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonInput, IonButton, FormsModule]
})
export class Tab2Page {

  datos=inject(DatosService);

  dineroRecibido = 0.0;
  mensaje='';
  descuento = 0.12;
  total = 0.0;

  calcularTotal(): void {
    this.total = 0;
    const dinero = Number(this.dineroRecibido);

    if (!dinero || dinero <= 0) {
      this.mensaje = 'Ingresa el dinero recibido';
      return;
    }
    if (dinero < this.datos.subtotal()) {
      this.mensaje = 'El dinero recibido es menor al subtotal';
      return;
    }

    
    this.total = this.datos.subtotal() * (1 - this.descuento);

    if (dinero > this.datos.subtotal()) {
      this.mensaje = 'El dinero recibido es mayor al subtotal';
    }
  }

}

