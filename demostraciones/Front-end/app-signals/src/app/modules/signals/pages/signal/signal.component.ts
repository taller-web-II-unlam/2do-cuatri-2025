import { Component, signal } from '@angular/core';

interface Cuadrado {
  color: string;
}

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})



export class SignalComponent {


  cuadrados = signal<Cuadrado[]>([
    {
      color: "azul"
    },
    {
      color: "azul"
    },
    {
      color: "azul"
    },
    {
      color: "rosa"
    },
  ]);

  retornarValorSignal() {
    return this.cuadrados()
  }

  setSignal() {
    this.cuadrados.set([{ color: "azul" }])
  }

  updateSignal() {
    this.cuadrados.update(cuads => {
      const index = cuads.findIndex(c => c.color === 'rosa');
      if (index !== -1) {
        const nuevos = [...cuads];
        nuevos[index] = { color: 'azul' };
        return nuevos;
      }
      return cuads;
    });
  }

  mutateSignal() {
    // this.cuadrados.mutate(cuads => {
    //   const index = cuads.findIndex(c => c.color === 'rosa');
    //   if (index !== -1) {
    //     cuads[index].color = 'azul'; // mutación directa
    //   }
    // });
  }

  resetSignal() {
    this.cuadrados.set(
      [
        {
          color: "azul"
        },
        {
          color: "azul"
        },
        {
          color: "azul"
        },
        {
          color: "rosa"
        },
      ]
    )
  }

}

