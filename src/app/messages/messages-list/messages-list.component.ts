import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  // imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent{
  // messages = input.required<string[]>();

  private messageService = inject(MessagesService);
  // messageList$ = this.messageService.messsages$;
  messages = this.messageService.allMessages;

  // private cdRef = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);
  // get messages(){
  //   return this.messageService.allMessages;
  // }
  // messages:string[] = [];
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

  // ngOnInit(): void {
  //   const messageSubscription = this.messageService.messsages$.subscribe((messages)=> {
  //     this.messages = messages;
  //     this.cdRef.markForCheck();
  //   });
  //   this.destroyRef.onDestroy(()=> {
  //     messageSubscription.unsubscribe();
  //   });
  // }
}
