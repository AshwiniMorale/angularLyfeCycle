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
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

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
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagragh') paragraph: ElementRef;
  constructor() {
    console.log('constructor call');
   }
   ngOnChanges(change: SimpleChanges){
    console.log('ng onchage call');
    console.log(change);
   }
  ngOnInit(): void {
    console.log('ngoninit call');
    console.log('text Content' +this.header.nativeElement.textContent);
    console.log('text content in paragraph' +this.paragraph.nativeElement.textContent );
  }
  ngDoCheck(){
    console.log('do check call');
  }
  ngAfterContentInit(){
    console.log('content init call');
    console.log('text content in paragraph' +this.paragraph.nativeElement.textContent );

  }
  ngAfterContentChecked(){
    console.log('content checked call');
  }
  ngAfterViewInit(){
    console.log('view init call');
    console.log('text Content' +this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('view checked call');
  }
  ngOnDestroy(){
    console.log('on distroy call');
  }
}
