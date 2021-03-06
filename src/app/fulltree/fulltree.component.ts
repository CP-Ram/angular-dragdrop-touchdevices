import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulltree',
  templateUrl: './fulltree.component.html',
  styleUrls: ['./fulltree.component.css']
})
export class FulltreeComponent {
  options = {
    allowDrag: true,
    allowDrop(element , to){
      const isSameParent = element.parent.id === to.parent.id;
      return false || isSameParent;
    }
  };

  nodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1.1' },
        { name: 'child1.2' },
        { name: 'child1.3' },
        { name: 'child1.4' },
        { name: 'child1.5' }
      ]
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [] },
        { name: 'child2.3', children: [] },
        { name: 'child2.4', children: [] },
        { name: 'child2.5', children: [
          {name: 'grandchild2.5.1'}
        ] }
      ]
    }
  ];
}