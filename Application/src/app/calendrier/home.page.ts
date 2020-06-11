import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { registerLocaleData, formatDate } from '@angular/common';
import { ItemService } from '../services/item.service';
import { AlertController } from '@ionic/angular'
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;
  events : Array<any>
  id_todo_item;
  event = {
    title:'',
    desc:'',
    startTime:'',
    endTime:'',
    allDay:false,
    type:''
  };
  current_date;

  minDate = new Date().toISOString();

  eventSource = [];
  calendar = 
  {
    mode:'day',
    currentDate: new Date(),
    DisplayDate: new Date(),
    lisibleDate: new Date().toString().substr(0,11)
  }

  

  @ViewChild(CalendarComponent, {static: true}) myCal: CalendarComponent; 

  constructor(
    public itemService: ItemService,
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID)private locale: string
  ){}

  ngOnInit(){
    this.items = this.itemService.getItems();
    this.events = this.itemService.getEvents();
    this.current_date = new Date;
    var that = this; 
    for(var i = 0; i < this.events.length; i++)
    {
      this.eventSource.push(this.events[i]);
    }
    this.resetEvent();

    $(document).ready(function(){
      that.updateDate(that.current_date.toString());
      that.updateHour();
    });
  }

  selectedItem(item)
  {
    var value = item.detail.value;
    var id = value.substr(value.length - 1, value.length);
    var current_item = this.itemService.getItemById(Number.parseInt(id));
    this.event.title = current_item.title;
    this.event.desc = current_item.description;
  }

  selectedtype(item)
  {
    var value = item.detail.value;
    this.event.type = value;
  }


  resetEvent(){
    this.event = {
      title:'',
      desc:'',
      startTime:new Date().toISOString(),
      endTime:new Date().toISOString(),
      allDay:false,
      type:''
    };
  }

  addEvent(){
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc,
      type: this.event.type
    }
    
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
      
    }
    this.itemService.createEvent(eventCopy);
    console.log(eventCopy);
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  changeMode(mode)
  {
    this.calendar.mode = mode;
  }

  lisibleDate()
  {
    return this.calendar.currentDate.toString().substr(0,15);
  }

  goToToday()
  {
    this.calendar.currentDate = new Date();
    this.calendar.DisplayDate = new Date();
    this.calendar.lisibleDate = this.calendar.DisplayDate.toString().substr(0,11);
    var swiper = document.querySelector('.swiper-container')['swiper'];   
    swiper.slidePrev(); 

  }

  back()
  {
    /*
    var date = new Date();
    date.setDate(this.calendar.DisplayDate.getDate()-1);
    this.calendar.lisibleDate = date.toString().substr(0,11);
    this.calendar.DisplayDate = date;
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();*/
    this.current_date.setDate(this.current_date.getDate()-1);
    this.updateDate(this.current_date.toString());
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
    var that = this;
    setTimeout(function(){
      that.updateHour();
    },335);
    
  }

  next()
  {
    /*
    var date = new Date();
    date.setDate(this.calendar.DisplayDate.getDate()+1);
    this.calendar.lisibleDate = date.toString().substr(0,11);
    this.calendar.DisplayDate = date;
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();*/

    this.current_date.setDate(this.current_date.getDate()+1);
    this.updateDate(this.current_date.toString());
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
    var that = this;
    setTimeout(function(){
      that.updateHour();
    },335);

  }

  viewTitle = '';

  async onEventSelected(event)
  {
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
    
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader : event.desc,
      message: 'de : ' + start + '<br><br>à : ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  onViewTitleChanged(title)
  {
    this.viewTitle = title;
  }

  onTimeSelected(ev)
  {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());

    this.calendar.DisplayDate = selected;
    this.calendar.lisibleDate = selected.toString().substr(0,11);
  }


  updateDate(date)
  {

   
    var tab_current_date = date.split(' ');
     
    console.log(tab_current_date);
    switch(tab_current_date[0])
    {
      case 'Mon':
        tab_current_date[0] = 'Lundi';
        break;
      case 'Tue':
        tab_current_date[0] = 'Mardi';
        break;
      case 'Wed':
        tab_current_date[0] = 'Mercredi';
        break;
      case 'Thu':
        tab_current_date[0] = 'Jeudi';
        break;
      case 'Fri':
        tab_current_date[0] = 'Vendredi';
        break;
      case 'Sat':
        tab_current_date[0] = 'Samedi';
        break;
      case 'Sun':
        tab_current_date[0] = 'Dimanche';
        break;
    }
    switch(tab_current_date[1])
    {
      case 'Jan':
        tab_current_date[1] = 'Janvier';
        break;
      case 'Feb':
        tab_current_date[1] = 'Février';
        break;
      case 'Mar':
        tab_current_date[1] = 'Mars';
        break;
      case 'Apr':
        tab_current_date[1] = 'Avril';
        break;
      case 'May':
        tab_current_date[1] = 'Mai';
        break;
      case 'Jun':
        tab_current_date[1] = 'Juin';
        break;
      case 'Jul':
        tab_current_date[1] = 'Juillet';
        break;
      case 'Aug':
        tab_current_date[1] = 'Aout';
        break;
      case 'Sep':
        tab_current_date[1] = 'Septembre';
        break;
      case 'Oct':
        tab_current_date[1] = 'Octobre';
        break;
      case 'Nov':
        tab_current_date[1] = 'Novembre';
        break;
      case 'Dec':
        tab_current_date[1] = 'Decembre';
        break;
      
    }
    var date_out = tab_current_date[0]+ " " + tab_current_date[2] + " " + tab_current_date[1] + " " + tab_current_date[3];
    $('#lisibleDate').html(date_out); 
  }
  
  updateHour()
  {
   
    var count_time = 0;
    console.log
    for(var i = 0; i < $('.calendar-hour-column').length; i++)
    {
      count_time = (i % 24) + 1;
      
      if (count_time < 10)
      {
        $($('.calendar-hour-column')[i]).html("0"+count_time+":00");
      }
      else 
      {
        $($('.calendar-hour-column')[i]).html(count_time+":00");
      }
     
    }
    $('.dayview-allday-label').html('Journée entière');

    console.log($('tr'));
    var new_tr;
    for(var i = 1; i < $('tr').length-1; i++)
    {
      
       //$($('tr')[i]).append("<div class='separator'></div>")
    }
    $('.calendar-event-wrap').append('<div class="new_line_hour"></div>');
  
  }
  

  

}
