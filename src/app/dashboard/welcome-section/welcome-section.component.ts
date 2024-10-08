import { Component } from '@angular/core';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [SocialMediaBarComponent],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.scss',
})
export class WelcomeSectionComponent {}
