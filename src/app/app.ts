import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html'
})
export class App {
  contador = signal(0);
  titulo = 'Dale de comer al gatito';

  estaLleno = computed(() => this.contador() >= 25);
  audio = new Audio('assets/sonido-victoria.mp3');

  constructor() {
    effect(() => {
      this.audio.volume = 0.3;
      if (this.estaLleno()) {
        this.audio.play();
      } else {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
    });
  }

  incrementar(): void {
    this.contador.update((valor) => valor + 1);
  }

  reiniciar(): void {
    this.contador.set(0);
  }
}