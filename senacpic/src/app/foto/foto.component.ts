import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
@Input() titulo;
@Input() descricao;
@Input() url;
seguir;

}
