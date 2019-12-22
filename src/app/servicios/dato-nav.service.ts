import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatoNavService {

  ligas:any = [
    {id: '4335', nombre: 'La Liga', escudo: 'https://www.thesportsdb.com/images/media/league/badge/7onmyv1534768460.png', logo: 'https://www.thesportsdb.com/images/media/league/logo/b84z7h1565091817.png/preview', bandera: 'https://www.thesportsdb.com/images/icons/flags/shiny/32/Spain.png', bg: './assets/img/bgliga.jpg'},
    {id: '4328', nombre: 'Premier League', escudo: 'https://www.thesportsdb.com/images/media/league/badge/i6o0kh1549879062.png', logo: 'https://www.thesportsdb.com/images/media/league/logo/4c377s1535214890.png/preview', bandera: 'https://www.thesportsdb.com/images/icons/flags/shiny/32/England.png', bg: './assets/img/bgpremier.jpg'},
    {id: '4331', nombre: 'Bundesliga', escudo: 'https://www.thesportsdb.com/images/media/league/badge/0j55yv1534764799.png', logo: 'https://www.thesportsdb.com/images/media/league/logo/620ayu1534764709.png', bandera:'https://www.thesportsdb.com/images/icons/flags/shiny/32/Germany.png', bg: './assets/img/bgbundes.jpg'},
    {id: '4332', nombre: 'Serie A', escudo: 'https://www.thesportsdb.com/images/media/league/badge/ocy2fe1566216901.png', logo: 'https://www.thesportsdb.com/images/media/league/logo/r7q96i1557058508.png', bandera: 'https://www.thesportsdb.com/images/icons/flags/shiny/32/Italy.png', bg: './assets/img/bgserie.jpg'},
    {id: '4334', nombre: 'Ligue 1', escudo: 'https://www.thesportsdb.com/images/media/league/badge/8f5jmf1516458074.png', logo: 'https://www.thesportsdb.com/images/media/league/logo/wvryqu1422054726.png',bandera: 'https://www.thesportsdb.com/images/icons/flags/shiny/32/France.png', bg: './assets/img/bgligue.jpg'},
    {id: '4344', nombre: 'Primeira Liga', escudo: 'https://www.thesportsdb.com/images/media/league/badge/cplp641535733210.png', logo: 'https://www.thesportsdb.com/images/media/league/logo/2vwj951535732683.png', bandera: 'https://www.thesportsdb.com/images/icons/flags/shiny/32/Portugal.png', bg: './assets/img/bgprimeira.jpg'}]

   

  idLiga:string = ''
  stringLogo:string = ''


  buscarLiga(id:string){
    for (let i = 0; i < this.ligas.length; i++) {
      if (id == this.ligas[i].id) {
        return this.ligas[i];
      }
    }
  }

  cambiarFondo(url:string){
    let elem: HTMLElement = document.getElementById('body');
    elem.setAttribute("style", "background: url("+url+") no-repeat; background-size: cover;    background-attachment: fixed;")
  }

 

  constructor() { }
}
