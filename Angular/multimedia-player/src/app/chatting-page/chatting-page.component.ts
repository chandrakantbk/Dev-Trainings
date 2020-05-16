import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chatting-page',
  templateUrl: './chatting-page.component.html',
  styleUrls: ['./chatting-page.component.css']
})

export class ChattingPageComponent implements OnInit {
  pinned_chat_list = [];
  myMessage = "";
  user_name = '';

  chat_messages: Observable<any>;
  
  constructor(private live_db: AngularFirestore, private db: AngularFireDatabase) { 
    //this.chat_messages = this.db.list('Users_chat').valueChanges()
    
    this.chat_messages = this.live_db.collection('Users_Chat').doc('111.80196333336401').snapshotChanges();  
    
    this.chat_messages.subscribe( (data)=> {
      console.log(data)
    })

  }

  ngOnInit() {
    console.log(this.chat_messages);
  
  }

  addToImportantChat(item){
    this.pinned_chat_list.push(item)
  }

  sendMessage(){
    console.log(this.myMessage);
    console.log(this.chat_messages);

    ///this.db.list('Users_Chat').push({name: this.user_name, message: this.myMessage})
    // this.chat_messages.push({name: this.user_name, message: this.myMessage});

    let guid = Math.random() * 16 + new Date().getMilliseconds() + '';

    this.live_db.collection('Users_chat').doc(guid).set({name: this.user_name, message: this.myMessage});
    this.user_name = ''
    this.myMessage = '';
  
  }

}
