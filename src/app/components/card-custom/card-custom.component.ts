import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {ComponentLoaderService} from '../../common/services/component-loader.service';

@Component({
  selector: 'card-custom',
  templateUrl: './card-custom.component.html',
  styleUrls: ['./card-custom.component.scss']
})
export class CardCustomComponent implements OnInit, OnDestroy {

  @Input('data') data: string;

  constructor(private componentLoaderService: ComponentLoaderService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - Card custom')
  }

  close() {
    this.componentLoaderService.close();
  }
}
