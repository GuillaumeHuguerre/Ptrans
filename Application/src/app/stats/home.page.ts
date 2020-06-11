


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemService } from '../services/item.service';
import { Chart } from "chart.js";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage  {
  constructor( 
      private router : Router,     
  ){}
    ngOnInit() {
   
    }
    goToSport()
    {
        this.router.navigate(['/statpage/1']);
    }
    goToInactivite()
    {
        this.router.navigate(['/statpage/4']);
    }
    goToLoisir()
    {
        this.router.navigate(['/statpage/3']);
    }
    goToTravail()
    {
        this.router.navigate(['/statpage/2']);
    }
  
}
