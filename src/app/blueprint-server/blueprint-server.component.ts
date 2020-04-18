import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blueprint-server',
  templateUrl: './blueprint-server.component.html',
  styleUrls: ['./blueprint-server.component.css']
})
export class BlueprintServerComponent implements OnInit {
  // @Output() eventName = new EventEmitter<eventType>();
  @Output() serverCreated = new EventEmitter< {serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter< {serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    // console.log(this.serverContentInput.nativeElement.value);
    // console.log(this.serverNameInput.value);

    this.serverCreated.emit({
            serverName: serverNameInput.value,
            serverContent: serverContentInput.value
            });
  }
  onAddBlueprint(serverNameInput: HTMLInputElement) {
        // dont use this senario  this.serverContentInput.nativeElement.value = 'something';
        this.blueprintCreated.emit({
              serverName: serverNameInput.value,
              serverContent: this.serverContentInput.nativeElement.value
              });
  }

}
