import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  protected items = [
    {
      imgSrc: 'assets/images/partners/4sim.png',
      linkUrl: 'https://www.4sim.gov.az/az',
    },
    {
      imgSrc: 'assets/images/partners/mn.png',
      linkUrl: 'https://culture.gov.az/az',
    },
    {
      imgSrc: 'assets/images/partners/aze.svg',
      linkUrl: 'https://www.mys.gov.az/az',
    },
    {
      imgSrc: 'assets/images/partners/cn.png',
      linkUrl: 'https://www.citynet.az',
    },
    {
      imgSrc: 'assets/images/partners/xsolla.png',
      linkUrl: 'xsolla.com/',
    },
    {
      imgSrc: 'assets/images/partners/idda.png',
      linkUrl: 'https://metavibes.ai/',
    },
    {
      imgSrc: 'assets/images/partners/cola.png',
      linkUrl: 'https://www.coca-cola.com/az/az',
    },
    {
      imgSrc: 'assets/images/partners/federation.png',
      linkUrl:
        'https://www.facebook.com/AzerbaijanCybersportFederation?locale=az_AZ',
    },
    {
      imgSrc: 'assets/images/partners/idda.png',
      linkUrl: 'https://www.idda.az',
    },
    {
      imgSrc: 'assets/images/partners/punkap.png',
      linkUrl: 'https://www.instagram.com/punkap_baku/',
    },
    {
      imgSrc: 'assets/images/partners/gamenotelogo.png',
      linkUrl: 'https://gamenotebaku.az',
    },
    {
      imgSrc: 'assets/images/partners/pasha.svg',
      linkUrl: 'https://pasha-technology.com',
    },
    {
      imgSrc: 'assets/images/partners/cinema.png',
      linkUrl: 'https://www.cinemastercard.az',
    },
    {
      imgSrc: 'assets/images/partners/azd.png',
      linkUrl: 'https://azdimension.az',
    },
    {
      imgSrc: 'assets/images/partners/acer.svg',
      linkUrl: 'https://www.acer.com/us-en',
    },
    {
      imgSrc: 'assets/images/partners/goa.png',
      linkUrl: 'https://www.instagram.com/goageeking/',
    },
    {
      imgSrc: 'assets/images/partners/metavibes.png',
      linkUrl: 'https://metavibes.ai/',
    },

    {
      imgSrc: 'assets/images/partners/logitech.png',
      linkUrl: 'https://www.logitech.com',
    },
  ];
}
