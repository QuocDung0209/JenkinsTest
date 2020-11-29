import { Component, OnInit } from '@angular/core';
import { treeData, Entry } from 'src/app/common/mock-data/tree-data';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnInit {
  public rootData: Entry[] = treeData;

  constructor() { }

  ngOnInit(): void {

  }

  public fetchChildren = (item: Entry): Entry[] => {
    console.log(item);
    return item.children;
  }

  public hasChildren = (item: Entry): boolean => {
    return item.children && item.children.length > 0;
  }
}
