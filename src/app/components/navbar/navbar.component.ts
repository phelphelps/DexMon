import { APPLICATION_NAME } from './../../shared/constants/general-constants';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showBackButton: boolean; 
  public title: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    router.events.subscribe((routeInfo) => {
        if (routeInfo instanceof NavigationEnd) {
          this.showBackButton = routeInfo.url === '/' ? false : true;
          const pokemonName = localStorage.getItem('currentPokemonName');
          this.title = pokemonName ? `${pokemonName} info` : APPLICATION_NAME;
        }
    });
  }

  ngOnInit(): void {
  }

  backToHome() {
    this.router.navigateByUrl('/');
  }

}
