import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product, ProductForm } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-computed-signal',
  imports: [ReactiveFormsModule],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent implements OnInit {


  form!: FormGroup;
  private _fb = inject(FormBuilder);

  products = signal<Product[]>(
    [
      {
        id: 1,
        name: "Mayonesa",
        price: 200,
        quantity: 1
      }
    ]
  );

  totalPrice = computed(() => {
    return this.products().reduce((previous, current) => {
      return previous + current.price * current.quantity;
    }, 0);
  });


  constructor() {
    this.form = this._fb.group<ProductForm>({
      name: this._fb.control(''),
      quantity: this._fb.control(1),
      price: this._fb.control(0),
    });
  }

  ngOnInit(): void {
  }
  

  addProduct(): void {
    const maxId = Math.max(...this.products().map(p => p.id));

    this.products.update((products) => [
      ...products,
      {
        id: maxId + 1,
        ...this.form.value,
      },
    ]);
    this.form.reset({
      name: '',
      price: 0,
      quantity: 1,
    });
    console.log(this.products());

  }

  deleteProduct(id: number): void {
    this.products.update((currentProducts) =>
      currentProducts.filter((item) => item.id !== id)
    );
  }

  increaseQuantity(id: number) {
    this.products.update(products =>
      products.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  decreaseQuantity(id: number) {
    this.products.update(products =>
      products.map(p =>
        p.id === id && p.quantity > 0
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  }

}
