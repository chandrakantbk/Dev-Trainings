import { Component } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user = "guest";
  answer = '';
  points = 0;

  user_text = '';

  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });


  no_of_words = 1;
  str_text = this.lorem.generateWords(this.no_of_words);

  checkInput(e: any) {

    if (this.str_text.indexOf(this.user_text) == 0) {
      this.answer = '';

      if (this.user_text.length == this.str_text.length) {
        this.answer = 'correct';

        this.points = this.points + 10;

        this.no_of_words++;

        this.str_text = this.lorem.generateWords(this.no_of_words);

        this.user_text = '';
      }

    } else {
      this.answer = 'incorrect';

    }

  }

}
