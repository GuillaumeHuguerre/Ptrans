import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;
  

  constructor(
    private router: Router,
    public itemService: ItemService,

  ){}

  ngOnInit(){
    this.items = this.itemService.getItems();
   
  }

  isAfaire(item)
  {
    if(item.etat == "A faire") return true;
    else return false;
  }

  isCommence(item)
  {
    if(item.etat == "Commencé") return true;
    else return false;
  }

  isTermine(item)
  {
    if(item.etat == "Terminé") return true;
    else return false;
  }

}
