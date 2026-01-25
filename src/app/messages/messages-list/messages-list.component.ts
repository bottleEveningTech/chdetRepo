import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit{
  // messages = input.required<string[]>();

  private messageService = inject(MessagesService);
  // messages = this.messageService.allMessages;

  private cdRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);
  // get messages(){
  //   return this.messageService.allMessages;
  // }
  messages:string[] = [];
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

  ngOnInit(): void {
    const messageSubscription = this.messageService.messsages$.subscribe((messages)=> {
      this.messages = messages;
      this.cdRef.markForCheck();
    });
    this.destroyRef.onDestroy(()=> {
      messageSubscription.unsubscribe();
    });
  }
}
