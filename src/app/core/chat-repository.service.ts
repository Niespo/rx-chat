import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from "angularfire2/firestore";
import {Observable} from "rxjs/index";
import {map} from "rxjs/operators";
import {tap} from "rxjs/operators";
import {ChatMessage, ChatMessageResponse} from "./models/chat-message";

@Injectable()
export class ChatRepositoryService {

  private messageCollection: AngularFirestoreCollection<ChatMessage>;

  constructor(private firestore: AngularFirestore) {
    this.messageCollection = this.firestore
      .collection('/messages');
  }

  onChanges(): Observable<ChatMessage[]> {
    return this.messageCollection
      .stateChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const id = action.payload.doc.id;
            const data = action.payload.doc.data() as ChatMessage;

            return {id, ...data} as ChatMessageResponse;
          });
        })
      ) as Observable<ChatMessage[]>;
  }
}

