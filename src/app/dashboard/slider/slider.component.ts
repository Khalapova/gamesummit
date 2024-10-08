import { NgStyle } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { EffectCoverflow } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../core';

export interface Card {
  title: string;
  description: string;
  url: string;
}

register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SwiperDirective, NgStyle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  contents: Card[] = [
    {
      title: 'Computer',
      description: 'Description about computer...',
      url: 'assets/images/slider1.png',
    },
    {
      title: 'Building',
      description: 'Building description...',
      url: 'assets/images/slider2.jpg',
    },
    {
      title: 'Glass over a computer',
      description: 'Description of a glass over a computer',
      url: 'assets/images/slider3.jpg',
    },
  ];

  index = 1;

  swiperConfig: SwiperOptions = {
    navigation: true,
    effect: 'coverflow',
    autoplay: { delay: 5000 },
    slidesPerView: 'auto',
    centeredSlides: true,
    autoHeight: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 300,
      depth: 100,
      scale: 0.8,
      modifier: 1,
    },
    modules: [EffectCoverflow],
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiper.nativeElement.swiper.autoplay.start();
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
