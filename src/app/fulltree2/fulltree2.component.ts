import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulltree2',
  templateUrl: './fulltree2.component.html',
  styleUrls: ['./fulltree2.component.css']
})
export class Fulltree2Component implements OnInit {
 options = {
    allowDrag: true,
    // allowDrop(element , to){
    //   const isSameParent = element.parent.id === to.parent.id;
    //   console.log('allowdddd')
    //   return false || isSameParent;
    // },

   mouse: {
      drop: (tree, node, $event, {from, to}) => {
        console.log('drag', from, to); // from === {name: 'first'}
        // Add a node to `to.parent` at `to.index` based on the data in `from`
        // Then call tree.update()
      }
    }
  };

  onDrop($event) {
    // Dropped $event.element
  }

  allowDrop(element) {
    // Return true/false based on element  
  }

  nodes = [
    {
      name: 'root-tree1',
      children: [
        { name: 'root-tree-child1.1' },
        { name: 'root-tree-child1.2' },
        { name: 'root-tree-child1.3' },
        { name: 'root-treechild1.4' },
        { name: 'root-treechild1.5' }
      ]
    },
    {
      name: 'root-tree2',
      children: [
        { name: 'root-tree2-child2.1', children: [] },
        { name: 'root-tree2child2.2', children: [] },
        { name: 'root-tree2child2.3', children: [] },
        { name: 'root-tree2child2.4', children: [] },
        { name: 'root-tree2child2.5', children: [
          {name: 'root-tree2grandchild2.5.1'}
        ] }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}