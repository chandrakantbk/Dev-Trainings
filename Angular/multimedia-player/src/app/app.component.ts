import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'multimedia-player';
  filter_string;
  isShow = false;

  student_list = [
      {name: 'Akashy', city: 'Pune'},
      {name: 'SK', city: 'Pune'},
      {name: 'Sanjay', city: 'Pune'},
      {name: 'Anuja', city: 'Pune'},
      {name: 'Sanket', city: 'Mumbai'},
      {name: 'Pritam', city: 'Mumbai'},
  ];

  table_data = [...this.student_list];

  updateStudntList(event){
  
    console.log(this.filter_string)

    if(this.filter_string.trim() == ''){
      return false;
    }

    this.table_data = this.student_list.filter( (item)=>{ 
     
      return ( item.city.indexOf(this.filter_string)>=0 || 
                  item.name.indexOf(this.filter_string)>=0 )

      /*
      if( item.city.indexOf(this.filter_string)>=0 || 
          item.name.indexOf(this.filter_string)>=0  ){

        return true;

      } */

    })
    
  }

}