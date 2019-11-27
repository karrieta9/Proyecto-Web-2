import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  favoritos: any = [];
  constructor() { }

  saveFavoritos_LocalStorage(equipo: any) {
    let favorito = []
    if (localStorage.getItem('favoritos') === null) {
      favorito.push(equipo);
      localStorage.setItem('favoritos', JSON.stringify(favorito));
    } else {
      // for (let i = 0; i < this.favoritos.length; i++) {
      //   if (equipo != this.favoritos[i]) {
      //     favorito = JSON.parse(localStorage.getItem('favoritos'));
      //     favorito.push(equipo);
      //     localStorage.setItem('favoritos', JSON.stringify(favorito));
      //   }
      // }
      favorito = JSON.parse(localStorage.getItem('favoritos'));
      favorito.push(equipo);
      localStorage.setItem('favoritos', JSON.stringify(favorito));
    }
  }

  getFavoritos_LocalStorage() {
    if (localStorage.getItem('favoritos') === null) {
      return this.favoritos;
    } else {
      this.favoritos = JSON.parse(localStorage.getItem('favoritos'));
      return this.favoritos;
    }
  }

  deleteFavoritos_LocalStorage(equipo: any) {
    for (let i = 0; i < this.favoritos.length; i++) {
      if (equipo == this.favoritos[i]) {
        this.favoritos.splice(i, 1);
        localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
      }
    }
  }
}
