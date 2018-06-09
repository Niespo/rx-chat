import * as _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {ChatRepositoryService} from "../chat-repository.service";
import {ChatMessage, ChatMessageResponse} from "../models/chat-message";

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  public messages: ChatMessage[] = [];

  constructor(private chatRepository: ChatRepositoryService) {
  }

  ngOnInit(): void {
    this.chatRepository
      .onChanges()
      .subscribe((changes: Array<ChatMessageResponse>) => {
        const newMessages = _(changes)
          .orderBy('timestamp.seconds')
          .value();

        console.log('New messages:', newMessages);
        this.messages = this.messages.concat(newMessages);
      });
  }

  trackByFn(index, item) {
    return index;
  }
}
