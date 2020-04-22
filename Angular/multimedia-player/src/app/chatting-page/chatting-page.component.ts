import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatting-page',
  templateUrl: './chatting-page.component.html',
  styleUrls: ['./chatting-page.component.css']
})

export class ChattingPageComponent implements OnInit {
  pinned_chat_list = [];

  chat_messages = [
      {id: 1, name: 'SK', message: 'Hi' },
      {id: 2, name: 'Akshay', message: 'Hi' },
      {id: 3, name: 'SK', message: 'what are you doing?' },
      {id: 4, name: 'Akshay', message: 'Learning to develop chat app' },
  ]

  constructor() { }

  ngOnInit() {
    
  }

  addToImportantChat(item){
    this.pinned_chat_list.push(item)
  }

}