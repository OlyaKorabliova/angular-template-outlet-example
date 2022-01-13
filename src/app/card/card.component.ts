import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterViewInit {
  @Input() name!: string;
  @Input() profession!: string;
  @Input() age!: number;
  @Input() imageUrl!: string;
  @Input() optionTemplate!: TemplateRef<any>;

  @ContentChild('headerTemplate')
  headerTemplateRef!: TemplateRef<any>;

  constructor(private hostElement: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(
      'host element of CardComponent',
      this.hostElement.nativeElement.outerHTML
    );
  }

  get personAge(): string {
    return `${this.age} years old`;
  }
}
