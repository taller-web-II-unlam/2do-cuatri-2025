import { FormControl } from "@angular/forms";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ProductForm {
  name: FormControl<string | null>;
  price: FormControl<number | null>;
  quantity: FormControl<number | null>;
}
