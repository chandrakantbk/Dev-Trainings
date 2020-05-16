import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit {
  pinned_chat_list = [];
  myMessage = "";
  user_name = '';

  chat_messages = [
    {name: 'SK', message: 'Hello All'},
    {name: 'Akshay', message: 'Hello All'},
    {name: 'Anuja', message: 'Hello All'},
    {name: 'Sanjay', message: 'Hello All'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

  sendMessage(){

  }

  addToImportantChat(item){
    this.pinned_chat_list.push(item)
  }

}
