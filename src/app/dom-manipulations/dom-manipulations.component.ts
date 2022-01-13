import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LisaKudrowComponent } from '../lisa-kudrow/lisa-kudrow.component';
import { MattLeBlancComponent } from '../matt-le-blanc/matt-le-blanc.component';

@Component({
  selector: 'dom-manipulations',
  templateUrl: './dom-manipulations.component.html',
  styleUrls: ['./dom-manipulations.component.scss'],
})
export class DomManipulationsComponent implements AfterViewInit {
  title = 'Angular DOM Manipulations example';
  courteneyCox = 'assets/images/courteney-cox.jpg';
  matthewPerry = 'assets/images/matthew-perry.jpg';

  @ViewChild('personTemplate') personTemplateRef: TemplateRef<any>;
  @ViewChild('insertViewViaTemplate', { read: ViewContainerRef })
  insertViewViaTemplateRef: ViewContainerRef;
  @ViewChild('insertView', { read: ViewContainerRef })
  insertViewRef: ViewContainerRef;

  constructor(
    private componentFactory: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngAfterViewInit(): void {
    this.addCourteneyCox();
    this.addMattPerry();
    this.addLisaKudrow();
    this.addMattLeBlanc();
  }

  addCourteneyCox(): void {
    const view = this.personTemplateRef.createEmbeddedView({
      $implicit: 'Courteney Cox',
      image: this.courteneyCox,
      age: 57,
      role: 'Actress',
    });
    this.insertViewViaTemplateRef.insert(view);
  }

  addMattPerry(): void {
    this.insertViewRef.createEmbeddedView(this.personTemplateRef, {
      $implicit: 'Matthew Perry',
      image: this.matthewPerry,
      age: 52,
      role: 'Actor',
    });
  }

  addLisaKudrow(): void {
    const factory =
      this.componentFactory.resolveComponentFactory(LisaKudrowComponent);
    const componentRef = factory.create(this.injector);
    this.insertViewRef.insert(componentRef.hostView, 0);
  }

  addMattLeBlanc(): void {
    const factory =
      this.componentFactory.resolveComponentFactory(MattLeBlancComponent);
    this.insertViewViaTemplateRef.createComponent(factory, 1);
  }

  clearAllBelow(): void {
    this.insertViewViaTemplateRef.clear();
    this.insertViewRef.detach();
  }
}
