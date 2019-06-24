import { Component } from '@angular/core';
import { Foto } from './foto/foto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fotos:Foto[] = [
    {
        id: 1,
        titulo: 'SS Rosé Goku Black',
        alt: 'The Evil Super Saiyan God',
        url: 'https://i.pinimg.com/originals/29/e3/ae/29e3ae12ae463720d95154c118539ac7.jpg',
        descricao: 'Shintani Style'
    },

    {
        id: 2,
        titulo: 'SS Rosé Goku Black',
        alt: 'The Evil Super Saiyan God',
        url: 'https://i.pinimg.com/originals/29/e3/ae/29e3ae12ae463720d95154c118539ac7.jpg',
        descricao: 'Shintani Style'
    },

    {
        id: 3,
        titulo: 'SS Rosé Goku Black',
        alt: 'The Evil Super Saiyan God',
        url: 'https://i.pinimg.com/originals/29/e3/ae/29e3ae12ae463720d95154c118539ac7.jpg',
        descricao: 'Shintani Style'
    }

    ]
}
