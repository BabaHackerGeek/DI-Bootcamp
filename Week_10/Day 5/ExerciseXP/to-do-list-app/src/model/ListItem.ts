import { v4 as uuidv4 } from 'uuid';

export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export class ListItem implements Item {
  constructor(
    public id: string = uuidv4(),
    public item: string,
    public checked: boolean = false
  ) {}
}
