import { Component, computed, effect, inject, OnDestroy, signal, OnInit } from '@angular/core';
import { Product, ProductForm } from '../../../computed/interfaces/producto.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-effects',
  imports: [ReactiveFormsModule],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent implements OnInit,OnDestroy {

  form!: FormGroup;
  private _fb = inject(FormBuilder);

  products = signal<Product[]>(
    this.getProductsFromLocalStorage<Product[]>('products') || []
  );

  count = signal(0);

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

  public effectProduct = effect(() => {
    localStorage.setItem('products', JSON.stringify(this.products()));
  })

  ngOnDestroy(): void {
    this.effectProduct.destroy();
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
  }

  deleteProduct(id: number): void {
    this.products.update((currentProducts) =>
      currentProducts.filter((item) => item.id !== id)
    );
  }

  increaseQuantity(id: number) {
    this.count.update(count => count + 1);
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

  getProductsFromLocalStorage<T>(key: string): T | null {
    const products = localStorage.getItem(key);
    return products ? JSON.parse(products) : null;
  }

}
