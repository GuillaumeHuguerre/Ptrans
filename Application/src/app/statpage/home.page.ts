


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { ItemService } from '../services/item.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { zip } from 'rxjs';
import { Key } from 'protractor';

var $ = require ('jquery'); 

var Current_Week;
var Type;

const HEIGHT_VALUE = 80;
const WIDTH_VALUE = 292;
const MAX_DISPLAY_MOY_VALUE = 57;
const MIN_DISPLAY_MOY_VALUE = 36;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    public http: HttpClient
  ) {
    console.log("inpage");
   
    let id_page = 0;
    
    let sous_titre;
    let that = this;
   

    this.route.params.subscribe(
      data => {    
        
        id_page = parseInt(data.id);
      }) 
      
    setTimeout(function(){

      switch(id_page){
          case 1: //Sport
            Type = "Sport";
            sous_titre = "Temps passé à faire du sport";
            break;

          case 2: //Travail          
            Type = "Travail";
            sous_titre = "Temps passé à travailler";
            break;
          
          case 3: //Loisir
            Type = "Loisir";
            sous_titre = "Temps consacré aux loisirs";
            break;
          
          case 4: //Inactivité
            Type = "Inactivité";
            sous_titre = "Temps passé à être inactif";
            break;
          
          default:

            break;
      }          
      let first_day = that.getMonday(new Date());
      Current_Week = first_day;                   
      that.setTitle(Type);
      that.setSubtitle(sous_titre
        );
      that.generateSkeleton($("#0"),0);
      that.process($('#0'));
            
    },100);
  }

  process(element)
  {
    let allweek = (this.getWeekDays(Current_Week));
    let list_event_current_week = this.getEventsByWeek(allweek);
    let data = this.buildDataByType(list_event_current_week,Type);  
    this.drawGraph(element,data);     
  }

  previous_week(){
    console.log('in previous week');
    let new_week = new Date();
    new_week.setDate(Current_Week.getDate() - 7);
    Current_Week = new_week;
    this.process($('#0'));
  }

  next_week(){
    let new_week = new Date();
    new_week.setDate(Current_Week.getDate() + 7);
    Current_Week = new_week;
    this.process($('#0'));
  }

  buildDataByType(list_event_current_week, type)
  { 
    let that = this;
    let data = {
      "lundi" : 0,
      "mardi" : 0,
      "mercredi" : 0,
      "jeudi" : 0,
      "vendredi" : 0,
      "samedi" : 0,
      "dimanche" : 0
    };
    let count = 0;
    list_event_current_week.forEach((element,key) => {
      count = 0;
      element.forEach(event => {
        console.log(event);
        if (type != null)
        {
          if (that.getDurationOfEvent(event)[0] == type)
          {
            count += that.getDurationOfEvent(event)[1];
          }
        }
        else
        {
          count += that.getDurationOfEvent(event)[1];
        }            
      });
      data[key] = count;      
    });
    console.log(data);
    return data;
  }

  getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1);
    return new Date(d.setDate(diff));
  }

  setTitle(type){    
    $('.titre_stat_page').html(type);
  }

  setSubtitle(sous_titre){    
    $('.under_header').html(sous_titre);
  }

  getEventsByWeek(week)
  {
    let Events = this.getEvent();
    let list_event_in_week = new Map();
    list_event_in_week.set('lundi',Array());
    list_event_in_week.set('mardi',Array());
    list_event_in_week.set('mercredi',Array());
    list_event_in_week.set('jeudi',Array());
    list_event_in_week.set('vendredi',Array());
    list_event_in_week.set('samedi',Array());
    list_event_in_week.set('dimanche',Array());    
    let isOK = false;
    let count = 0;
    let rank_map;
    
    Events.forEach(element => {
      element.forEach(elementBis => {
        isOK = false;
        let current_debut = new Date(elementBis.debut);
        let current_day = current_debut.getDate();
        let current_month = current_debut.getMonth();
        let current_year = current_debut.getFullYear();
        let current_date = new Date(current_year, current_month, current_day);
        count = 0;
        week.forEach(element_week => {
          if (!isOK)
          {
            count ++;
          }          
          if (this.checkDate(element_week,current_date))
          {
            isOK = true;
          }
        });
        if (isOK)
        {
          switch (count){
            case 1:
              rank_map = 'lundi';
              break;
            case 2:
              rank_map = 'mardi';
              break;
            case 3:
              rank_map = 'mercredi';
              break;
            case 4:
              rank_map = 'jeudi';
              break;
            case 5:
              rank_map = 'vendredi';
              break;
            case 6:
              rank_map = 'samedi';
              break;
            case 7:
              rank_map = 'dimanche';
              break;
          }          
          (list_event_in_week.get(rank_map)).push(elementBis);
        }
      });
    });
    return list_event_in_week;
  }

  checkDate(date1, date2)
  {
    if (date1.getDate() == date2.getDate())
    {
      if (date1.getMonth() == date2.getMonth())
      {
        if (date1.getFullYear() == date2.getFullYear())
        {
          return true;
        }
      }
    }
    return false;
  }

  getWeekDays(day)
  { 
    let nbTotalDays;
    let day_number = day.getDate();
    let month = day.getMonth();
    let year = day.getFullYear();    
    let week = Array();
    switch (month){
      case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          nbTotalDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
          nbTotalDays = 30;
            break;
        case 2:
            if (((year % 4 == 0) && 
                 !(year % 100 == 0))
                 || (year % 400 == 0))
                 nbTotalDays = 29;
            else
              nbTotalDays = 28;
            break;
    }

    for (var i = 0; i < 7; i++)
    {
        week.push(new Date(year,month,day_number));
        if ((day_number+1)>nbTotalDays)
        {
          day_number = 1;
          month++;
          if (month == 11)
          {
            month == 0
          }
        }
        else
        {
          day_number++;
        }
    }
    return week;
    
  }

  getEventById(event_id)
  {
    var result;
    $.ajax({
      url : 'http://127.0.0.1:8888/appdata/events.php/',
      type : 'GET',
      async: false,
      data: {        
         id_event : event_id
      },
      success: function(response){
        result = JSON.parse(response);
      },
      error: function(error){
          console.log(error);
      }

    });
    
    return result;
  }

  getDurationOfEvent(event)
  {
    let debut = new Date(event['debut']);
    let fin = new Date(event['fin']);
    let duration_hours = Math.abs(fin.getHours() - debut.getHours());
    let duration_minutes = fin.getMinutes() - debut.getMinutes();
    let total_duration = duration_hours + ((duration_minutes/6)/10);
    return [event['Type'],total_duration];
  }
  getEvent()
  {
    let list_event = new Map();
    list_event.set('Travail', Array());
    list_event.set('Sport', Array());
    list_event.set('Loisir', Array());
    $.ajax({
      url : 'http://127.0.0.1:8888/appdata/events.php/',
      type : 'GET',
      async: false,      
      success: function(response){
        var data = JSON.parse(response);
        data['events'].forEach(element =>  {               
          (list_event.get(element.Type)).push(element);                        
        });   

      },
      error: function(error){
          console.log(error);
      }

    });
    return list_event;
  }
  drawGraph(Parent,data)
  {
    let moyenne = 0;
    let total = 0;
    let count = 0
    let max_value = 0;
    let max_display = 0;
    let min_value = 1000000;
    let middle = 0;
    var current_element = Parent;
    let that = this;
  
    
    $.each(data, function(key, val) {
       if (val != null)
       {
           if (max_value < val)
           {
               max_value = val;
           }
           if (min_value > val)
           {
               min_value = val
           }
            total += val;
            count ++;
           
       }
    });
     
    moyenne = total/count;
    max_display = max_value + 1;
    middle = max_display/2;
    
    $.each(data, function(key, val) {
        if (val != null)
        {
          that.generateHistoBar(current_element, key, val, max_display);            
        }
     });
     
    $('.nb_hour').html(this.formatHeure(total));
    $('.display_moy_txt_'+Parent[0].id).html('moy.');
    $('.section_moyenne_txt_'+Parent[0].id).html(this.formatHeure(moyenne));
    this.formatHeure(moyenne);
    let moyenne_txt_position = HEIGHT_VALUE-((HEIGHT_VALUE*moyenne)/max_display);
    if (moyenne_txt_position < MAX_DISPLAY_MOY_VALUE && moyenne_txt_position > MIN_DISPLAY_MOY_VALUE)
    {
        $('.display_moy_content_'+Parent[0].id).css('top',moyenne_txt_position);
        $('.display_moy_dashed_'+Parent[0].id).css('top',moyenne_txt_position);
        $('.display_max_content_'+Parent[0].id).html(max_display+"h");

    }
    else
    {
        $('.display_moy_content_'+Parent[0].id).css('top',moyenne_txt_position);
        $('.display_moy_dashed_'+Parent[0].id).css('top',moyenne_txt_position);
        $('.display_med_content_'+Parent[0].id).html(middle+"h");
        $('.display_max_content_'+Parent[0].id).html(max_display+"h");
    }
  
  }

  formatHeure(float_number)
  {
    let retour;
    let moyenne_integer = parseInt(float_number);
    let moyenne_decimal = parseFloat((float_number.toFixed(1) - moyenne_integer).toFixed(1))*10;
    let heure = moyenne_integer;
    let min = moyenne_decimal*6;
    if (min == 0)
    {
      retour = heure+"h";
    }
    else
    {
      retour = heure+"h "+min+"mn";
    }
    
    return retour;
  } 

  generateHistoBar(element, day, value, max_display)
  {
    let current_id = element[0].id;

    let Bar_skeleton = "<div class ='default_histo_bar histo_bar_"+day+"_"+current_id+"'> ";
    Bar_skeleton += "</div>";
    
    let height_bar = (HEIGHT_VALUE*value)/max_display;

    $('.cell_'+day+'_'+current_id).addClass('ok');
    $('.cell_'+day+'_'+current_id).html(Bar_skeleton);
    $('.histo_bar_'+day+'_'+current_id).css('height',height_bar);
    
  }
  generateSkeleton(element, id)
  {
    var skeleton = "<table class='table'>";
        skeleton += "<tr class='cell_row'>";
            skeleton += "<td class='cell first_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell last_cell'>";
            
            skeleton += "</td>";
        skeleton += "</tr>";
        
        skeleton += "<tr class='cell_row'>";
            skeleton += "<td class='cell first_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell last_cell'>";
            
            skeleton += "</td>";
        skeleton += "</tr>";
        skeleton += "<tr class='cell_row'>";
            skeleton += "<td class='cell first_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell last_cell'>";
            
            skeleton += "</td>";
        skeleton += "</tr>";
        skeleton += "<tr class='cell_row'>";
            skeleton += "<td class='cell first_cell cell_lundi_"+id+"'>";
                
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell cell_mardi_"+id+"'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell cell_mercredi_"+id+"'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell cell_jeudi_"+id+"'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell cell_vendredi_"+id+"'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell center_cell cell_samedi_"+id+"'>";
            
            skeleton += "</td>";
            skeleton += "<td class='cell last_cell cell_dimanche_"+id+"'>";
            
            skeleton += "</td>";
        skeleton += "</tr>";
        
        skeleton += "<tr class='cell_row'>";
            skeleton += "<td class='cell end_cell first_cell'>";
            skeleton += "<p> L </p>";
            skeleton += "</td>";

            skeleton += "<td class='cell end_cell center_cell'>";
            skeleton += "<p> M </p>";
            skeleton += "</td>";

            skeleton += "<td class='cell end_cell center_cell'>";
            skeleton += "<p> M </p>";
            skeleton += "</td>";

            skeleton += "<td class='cell end_cell center_cell'>";
            skeleton += "<p> J </p>";
            skeleton += "</td>";

            skeleton += "<td class='cell end_cell center_cell'>";
            skeleton += "<p> V </p>";
            skeleton += "</td>";

            skeleton += "<td class='cell end_cell center_cell'>";
            skeleton += "<p> S </p>";
            skeleton += "</td>";

            skeleton += "<td class='cell end_cell last_cell'>";
            skeleton += "<p> D </p>";
            skeleton += "</td>";

        skeleton += "</tr>";

    skeleton += "</table>";
    skeleton += "<div class='display_value'>";
    
        skeleton += "<div class='display_0'>";
            skeleton += "<p class='display_value_content'>0</p>";
        skeleton += "</div>";

        skeleton += "<div class='display_med'>";
            skeleton += "<p class='display_med_content_"+id+" display_value_content'></p>";
        skeleton += "</div>";

        skeleton += "<div class='display_max'>";
            skeleton += "<p class='display_max_content_"+id+" display_value_content'></p>";
        skeleton += "</div>";

    skeleton += "</div>";
    skeleton += "<div class='display_moy_dashed display_moy_dashed_"+id+"'>";

    skeleton += "</div>";

    skeleton += "<div class='display_moy_content display_moy_content_"+id+"'>";
    skeleton += "<p class='display_moy_txt display_moy_txt_"+id+"'></p>";
    skeleton += "</div>";
    skeleton += "<div class='section_moyenne'>";
        skeleton += "<div class='section_moyenne_separator'>";
        skeleton += "</div>";
        skeleton += "<div class='section_moyenne_content'>";
            skeleton += "<p>Moyenne quotidienne</p>";
            skeleton += "<p class='section_moyenne_txt section_moyenne_txt_"+id+"'></p>";
        skeleton += "</div>";
        skeleton += "<div class='section_moyenne_separator'>";
        skeleton += "</div>";
    skeleton += "</div>";

  
    element.html(skeleton);

  }
  Onclick() 
  {
    this.router.navigate(['/statistiques']);
  }
}