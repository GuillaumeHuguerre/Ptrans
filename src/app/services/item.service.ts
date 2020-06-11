

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  id_university;
  id_department;
  id_group;
  id_user;
  id_view;
  items: Array<any> = [
   
  ]

  events: Array<any> = [

  ]

  constructor(public http: HttpClient) {
    
    this.http.get('http://127.0.0.1:8888/appdata/todo.php/').subscribe(data=>{
      this.loadItems(data["items"]);
    });

    this.http.get('http://127.0.0.1:8888/appdata/events.php/').subscribe(data=>{
     
      this.loadEvents(data["events"]);
    });
   }


   loadEvents(_events)
   {
    
     for(var i = 0; i < _events.length; i++)
     {
       var allDay;
      if(_events[i].allDay == "0") allDay = false;
      else allDay = true;
       this.events.push({
         'title' : _events[i].titre,
         'desc' : _events[i].description,
         'startTime' : new Date(_events[i].debut),
         'endTime' : new Date(_events[i].fin),
         'allDay' : allDay,
         'type' : _events[i].type
       })
     }
     console.log(this.events);
   }
   loadItems(_items)
   {
     for(var i = 0; i < _items.length; i++)
     {
      this.items.push({
        'id': _items[i].id_item,
        'title': _items[i].titre,
        'description': _items[i].description,
        'etat' : _items[i].etat
      });
     }
    
   }

   createEvent(event)
   {
     this.events.push({
       'title' : event.title,
       'desc' : event.desc,
       'startTime' : event.startTime,
       'endTime' : event.endTime,
       'allDay' : event.allDay,
       'type' : event.type
     });

     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams({
        fromObject: {"id_user": "0", "titre" : event.title, "desc": event.desc, "debut" : event.startTime, "fin" : event.endTime, "allDay" : event.allDay, "type" : event.type},
    })
    };

    this.http.post("http://127.0.0.1:8888/appdata/events.php/", {}, httpOptions).subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
  });
  
   }

  createItem(_title, _description, _etat){

 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams({
        fromObject: {"id_user": "0", "titre" : _title, "desc": _description, "etat" : _etat},
        
    })
    };



  this.http.post("http://127.0.0.1:8888/appdata/todo.php/", {}, httpOptions)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
    });
   
    this.items.push({
      'title' : _title,
      'desc' : _description,
      'etat' : _etat
    });

    

    
  }

  getItems(){
    return this.items;
  }

  getEvents()
  {
    return this.events;
  }

  getItemById(id){
    for(var i = 0; i < this.items.length; i++)
    {
      if(this.items[i].id == id)
      {
        
        return this.items[i];
      }

    }
    return null;
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams({
        fromObject: {"id_user": "0", "id_item" : newValues.id, "titre" : newValues.title, "desc": newValues.description, "etat" : newValues.etat},
        
    })
    };


  this.http.put("http://127.0.0.1:8888/appdata/todo.php/", {}, httpOptions)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
    });
  }
}
