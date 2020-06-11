


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  id_university;
  id_department;
  id_group;
  school: Map<any,any>;
  departments: Map<any, any>;
  groups: Map<any, any>;
  id_user;
  id_view;
  
  constructor(
    private router: Router,
    public http: HttpClient,
    public itemService : ItemService

  ) {
    
    this.school = new Map();
    this.departments = new Map();
    this.groups = new Map();
    this.id_view = [];
    
   

   var that = this;

    this.http.get('https://api.smart-edt.fr/users/create').subscribe(data=>{   
     
      this.id_user =  data['id'];
      this.itemService.id_user = this.id_user;
     

      console.log(this.id_user)
      const httpOptions = {
        headers : new HttpHeaders(
          {
            'Content-Type' : 'application/json',
            'X-UserId': this.id_user,
            'X-Installed': 'false'
          }
        )
        
      };
      this.http.get('https://api.smart-edt.fr/schools/', httpOptions).subscribe(data=>{
          console.log(data);
        for(var i=0; i < data['schools'].length; i++)
        {
          this.school.set(data['schools'][i]['id'],data['schools'][i]['name']);
        }
  
      })
  
    });

   
    
   }

 

  goToCalendar()
  {
    this.router.navigate(['/calendrier']);
  }

  goToTodo()
  {
    this.router.navigate(['/todo']);
  }

  goToStats()
  {
    this.router.navigate(['/statistiques'])
  }
  
  selectedUniversity(_university)
  {
    const httpOptions = {
      headers : new HttpHeaders(
        {
          'Content-Type' : 'application/json',
          'X-UserId': this.id_user,
          'X-Installed': 'false'
        }
      )
      
    };
    this.id_university = _university.detail.value;
    this.itemService.id_university = this.id_university;
  
    this.departments.clear();
    this.groups.clear();
    this.http.get('https://api.smart-edt.fr/schools/'+this.id_university+'/departments/', httpOptions).subscribe(data=>{        
      for (var i=0;i<data['departments'].length ;i++)
      {
        this.departments.set(data['departments'][i]['id'],data['departments'][i]['name']);
      }           
    });

    document.querySelector('#list_department').className = "select_list";

    

    
  }

  selectedDepartment(_department)
  {

    const httpOptions = {
      headers : new HttpHeaders(
        {
          'Content-Type' : 'application/json',
          'X-UserId': this.id_user,
          'X-Installed': 'false'
        }
      )
      
    };

    this.id_department = _department.detail.value;
    this.itemService.id_department = this.id_department;

    this.groups.clear();
    this.http.get('https://api.smart-edt.fr/schools/'+this.id_university+'/departments/'+this.id_department+'/groups/', httpOptions).subscribe(data=>{          
      for (var i=0;i<data['groups'].length ;i++)
      {
        this.groups.set(data['groups'][i]['id'], data['groups'][i]['name']);
      }    
    });

    document.querySelector('#list_group').className = "select_list";


  }

  selectedGroup(_group)
  {

    var that = this;
    this.id_group = _group.detail.value;
    this.itemService.id_group = this.id_group;
   
    const httpOptions = {
      headers : new HttpHeaders(
        {
          'Content-Type' : 'application/json',
          'X-UserId': this.id_user,
          'X-Installed': 'false'
        }
      )
      
    };
    /*
     grecaptcha.ready(function() {
      grecaptcha.execute('6LcvUpMUAAAAAM0zzGYCBh79vsZNPd6RWhiiLcVY', {action: 'createView'})
      .then(function(token) {     
        var body = {"name": "test", "department" : that.id_department, "groups" : [that.id_group], "validateToken" : token  };

        that.http.post('https://api.smart-edt.fr/views', body, httpOptions).subscribe(dataset=>{          

      });
      

     setTimeout(function(){
        that.http.get('https://api.smart-edt.fr/views', httpOptions).subscribe(data=>{  
            for(var i = 0; i < data.length; i++){
              that.id_view.push(data[i].id);
              that.http.get('https://api.smart-edt.fr/views/'+data[i].id+'/events?week=2020-01-01', httpOptions).subscribe(dataset=>{  
              console.log(dataset)
              //createListEvent(dataset, itemService);
              var link = dataset['_links'][2].href;
              console.log(link);
              getCours(that.http, that.itemService, that.id_user, link, 0);
              });
            }
            that.itemService.id_view = that.id_view

        })


      }, 2000);
    
  });
    
  });

  */

    

             
    
  }
  



  
}

function getCours(http, itemService, id_user, URL, i)
{

if(i < 53)
{
  const httpOptions = {
    headers : new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'X-UserId': id_user,
        'X-Installed': 'false'
      }
    )
    
  }
  
    http.get('https://api.smart-edt.fr/'+URL, httpOptions).subscribe(dataset=>{  
        console.log(dataset)
        createListEvent(dataset, itemService);
        getCours(http, itemService, id_user, dataset._links[2].href, i+1);
        console.log(dataset._links[2].href);
    });
}


}

function createListEvent(response, itemService)
{
    console.log(response.days);
    var list_event = Array();
   
    for (var i = 0; i < response.days.length-1; i++)
    {
        var current_event = {
            'title' : '',
            'desc' : '',
            'startTime' : '',
            'endTime' : '',
            'allDay' : '',
            'type' : ''
        };
        console.log(current_event);
        
        if(response.days[i].events.length > 0)
        {
          if (response.days[i].events[0].category)
          {
              current_event.title = response.days[i].events[0].category;
          }
          if (response.days[i].events[0].module)
          {
              current_event.desc = response.days[i].events[0].module;
          }
          
          current_event.startTime = getDate(response.days[i].events[0].startTime);
          current_event.endTime = getDate(response.days[i].events[0].endTime);
          current_event.allDay = "false";
          current_event.type = "Travail";
          list_event.push(current_event);
      } 
    }
    for(var i = 0; i < list_event.length; i++)
    {
      itemService.createEvent(list_event[i]);
    }
    console.log(list_event);
    
}
function getDate(date)
{
    var current_date = date.split('T');
    let date_return;
    let year = Number(current_date[0].split('-')[0]);
    let month = Number(current_date[0].split('-')[1]);
    let day = Number(current_date[0].split('-')[2]);
    let hours = Number(current_date[1].split(':')[0]);
    let min = Number(current_date[1].split(':')[1]);
    date_return = new Date(year,month-1,day,hours,min);
    return date_return;
}