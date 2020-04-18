import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css'],
  //encapsulation: ViewEncapsulation.None,
  styles: [`
          label{
            color: pink;
          }`]
})
export class AddServerComponent implements
  OnInit, OnChanges,
  DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  constructor() {
    console.log('constructor call');
   }
   ngOnChanges(change: SimpleChanges){
    console.log('ng onchage call');
    console.log(change);
   }
  ngOnInit(): void {
    console.log('ngoninit call');
  }
  ngDoCheck(){
    console.log('do check call');
  }
  ngAfterContentInit(){
    console.log('content init call');
  }
  ngAfterContentChecked(){
    console.log('content checked call');
  }
  ngAfterViewInit(){
    console.log('view init call');
  }
  ngAfterViewChecked(){
    console.log('view checked call');
  }
  ngOnDestroy(){
    console.log('on distroy call');
  }
}
