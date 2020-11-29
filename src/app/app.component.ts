import { Component, ViewChild, ViewContainerRef, OnInit, ComponentRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { newValue, currentValue } from 'src/app/common/models/form-data.models';
import {CardCustomComponent} from './components/card-custom/card-custom.component';
import {ComponentLoaderService} from './common/services/component-loader.service';
import { User } from './common/models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  componentRef: ComponentRef<CardCustomComponent>

  user: User;
  name = {name: 'Dung'};

  title = 'angular-training';

  newValues: object = newValue;
  currentValues: object = currentValue;
  rowData: string;

  constructor(private componentLoaderService: ComponentLoaderService) {}

  ngOnInit() {
    this.user = {
      name: "KenjiNguyen",
      job: 'Engineer',
      education: 'HCMUS'
    };
    // this.componentLoaderService.close$.subscribe(reason => {
    //   this.container.clear();

    //   if (this.componentRef) {
    //     this.componentRef.destroy();
    //   }
    // });
    // this.renderComponent();
    // console.log('OnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    // if (this.componentRef) {
    //   this.componentRef.destroy();
    // }
  }

  // renderComponent() {
  //   const container = this.container;
  //   container.clear();
  //   const injector = container.injector;
  //   const cfr: ComponentFactoryResolver = injector.get(ComponentFactoryResolver);
  //   // create the component factory
  //   const componentFactory = cfr.resolveComponentFactory(CardCustomComponent);
  //   // add the component to the view
  //   const componentRef = container.createComponent(componentFactory, 0, injector);
  //   // pass some data to the component
  //   componentRef.instance.data = 'Data from appDynamicContainer directive';
  //   // componentRef.changeDetectorRef.detectChanges();
  //   this.componentRef = componentRef;
  // }

  // onRowClick(value) {
  //   this.rowData = value;
  // }
}
