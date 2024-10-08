import {
  AfterViewInit,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../core';

interface Verticals {
  imgUrl: string;
  thumbmailUrl: string;
  title: string;
  text: string;
}

register();

@Component({
  selector: 'app-verticals',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './verticals.component.html',
  styleUrl: './verticals.component.scss',
})
export class VerticalsComponent implements AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  contents: Verticals[] = [
    {
      thumbmailUrl: 'assets/images/gamedev.jpg',
      imgUrl: 'assets/images/gamedev.jpg',
      text: "Game development is a dynamic process that blends creativity and technology. From conceptual design to final launch, game dev teams work together to create immersive worlds, captivating narratives, and interactive gameplay. Whether it's coding the mechanics, designing characters, or composing a soundtrack, every role in game development plays a crucial part in shaping the player's experience. The rise of indie studios has opened up new opportunities, allowing unique and diverse voices to emerge in the industry",
      title: 'GAMEDEV',
    },
    {
      thumbmailUrl: 'assets/images/esports.jpg',
      imgUrl: 'assets/images/esports.jpg',
      text: 'Esports, or competitive gaming, has become a global phenomenon, turning video games into a professional sport. Gamers compete in tournaments for huge prizes, showcasing their skills in popular titles like League of Legends, Dota 2, and Counter-Strike. What began as casual online competitions has evolved into massive events with live audiences, sponsorships, and global streaming platforms. Esports is now recognized as a legitimate career path, attracting millions of fans and players worldwide.',
      title: 'ESPORTS',
    },
    {
      thumbmailUrl: 'assets/images/cosplay.jpg',
      imgUrl: 'assets/images/cosplay.jpg',
      text: 'Cosplay is a vibrant expression of fandom where fans transform into their favorite characters from games, anime, comics, or movies. It’s a unique blend of costume design, performance, and passion. Cosplayers invest time and skill into crafting detailed costumes, often recreating intricate designs with astonishing accuracy. Beyond just dressing up, it’s also about embodying the character, making conventions and competitions around the world a stage for creativity and community-building.',
      title: 'COSPLAY',
    },
    {
      thumbmailUrl: 'assets/images/k-pop.jpg',
      imgUrl: 'assets/images/k-pop.jpg',
      text: 'K-pop, short for Korean pop music, has taken the global music scene by storm with its catchy tunes, vibrant visuals, and highly choreographed performances. More than just music, K-pop is a cultural wave that blends traditional and modern influences. Groups like BTS, BLACKPINK, and TWICE have achieved international stardom, with dedicated fanbases across the world. The genre’s mix of innovative fashion, high-energy dance, and digital presence has made K-pop a cultural powerhouse, influencing fashion, trends, and even other genres of music.',
      title: 'K-POP',
    },
  ];

  activeIndex = signal(0);
  currentVertical = computed<Verticals>(
    () => this.contents[this.activeIndex()]
  );

  swiperConfig: SwiperOptions = {
    direction: 'vertical',
    autoplay: false,
    spaceBetween: 30,
    loop: true,
    slidesPerView: 2.5,
    slidesPerGroup: 2,
    initialSlide: 0,
  };

  public ngAfterViewInit() {
    Object.assign(this.swiper.nativeElement, this.swiperConfig);
    this.swiper.nativeElement.initialize();
  }

  protected selectSlide(i: number) {
    this.swiper.nativeElement.swiper.slideTo(i);
    this.activeIndex.set(i);
  }
}
