import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiper]',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  readonly #el = inject(ElementRef<SwiperContainer>);

  public config = input<SwiperOptions>();

  ngAfterViewInit(): void {
    Object.assign(this.#el.nativeElement, this.config);
    this.#el.nativeElement.initialize();
  }
}
