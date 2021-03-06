import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 *  Nome: Vinicius Ferreira Silva RA: 817127791
 * 
 */

@Component({
  selector: 'page-filme',
  templateUrl: 'filme.html',
  providers: [
    MovieProvider
  ]
})
export class FilmePage {

  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, private movieProvider: MovieProvider) {
    
  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
