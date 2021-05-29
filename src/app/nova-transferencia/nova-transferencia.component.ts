import { Component } from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
    valor: number = 91;
    destino: number = 92;

    transferir(){
        console.log('Solicitada nova  transferência');
        console.log('Valor: ', this.valor);
        console.log('Destino: ', this.destino);
    }
}
