import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  item: any;
  edit_item_form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.item = this.itemService.getItemById(data.id);
        //if item is undefined, go back to home
        if(!this.item){
          this.router.navigate(['/todo']);
        } else{
          this.edit_item_form = this.formBuilder.group({
            title: new FormControl(this.item.title, Validators.required),
            description: new FormControl(this.item.description, Validators.required),
            etat : new FormControl(this.item.etat, Validators.required)
          });
        }
      }
    )
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  updateItem(value){
    let newValues = {
      id: this.item.id,
      title: value.title,
      description: value.description,
      etat : value.etat
    }
    this.itemService.updateItem(newValues);
    this.router.navigate(['/todo']);
  }
delItem()
{
  const index = this.itemService.items.indexOf(this.item);
  if (index > -1) {
    this.itemService.items.splice(index, 1);
    this.router.navigate(['/todo']);
  } 
 
}

}
