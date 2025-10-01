import { Routes } from '@angular/router';
import { SignalComponent } from './modules/signals/pages/signal/signal.component';
import { ComputedSignalComponent } from './modules/computed/pages/computed-signal/computed-signal.component';
import { EffectsComponent } from './modules/effect/pages/effects/effects.component';

export const routes: Routes = [
    {
        path : "signal",
        component : SignalComponent,
    },
    {
        path : "computed",
        component : ComputedSignalComponent,
    },
    {
        path : "effects",
        component : EffectsComponent,
    },
    {
         path: '**', 
         redirectTo: 'signal',
    }
];
