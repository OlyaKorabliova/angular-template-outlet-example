import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() name!: string;
  @Input() profession!: string;
  @Input() age!: number;
  @Input() imageUrl!: string;
  @Input() optionTemplate!: TemplateRef<any>;

  @ContentChild('headerTemplate')
  headerTemplateRef!: TemplateRef<any>;

  get personAge(): string {
    return `${this.age} years old`;
  }
}
