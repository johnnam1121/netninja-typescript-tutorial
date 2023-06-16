import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter { // using the implements HasFormatter must have the format() function.
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

// exporting the invoice class