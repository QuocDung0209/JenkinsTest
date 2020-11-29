export interface Entry {
  type: string;
  name: string;
  children?: Entry[];
}

let counter = 0;
const nextId = () => counter++;

export const treeData: Entry[] = [
    {type: 'animal', name: 'animals', children: [
      {type: 'animal', name: 'dog'},
      {type: 'animal', name: 'cat'}
    ]},
    {type: 'vehicle', name: 'vehicle', children: []}
];
