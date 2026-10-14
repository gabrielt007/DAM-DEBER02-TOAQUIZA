import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class DatosService {
    nombre = signal('');
    cantidad=signal(0);
    precioUnitario = signal(0.0);
    subtotal = signal(0.0);
    enviado = signal(false);
    
        guardar(nombre: string, cantidad: number, precioUnitario: number, subtotal: number): void{
            this.nombre.set(nombre);
            this.cantidad.set(cantidad);
            this.precioUnitario.set(precioUnitario);
            this.subtotal.set(subtotal);
            this.enviado.set(true);
        }
}
