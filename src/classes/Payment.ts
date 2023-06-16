import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter { // using the implements HasFormatter must have the format() function.
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}