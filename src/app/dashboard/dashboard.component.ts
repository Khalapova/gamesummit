import { Component } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';
import { PartnersComponent } from './partners/partners.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { VerticalsComponent } from './verticals/verticals.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CountdownComponent,
    WelcomeSectionComponent,
    UpcomingEventComponent,
    VerticalsComponent,
    PartnersComponent,
    RegistrationComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
