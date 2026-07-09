import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  totalParticipants = 0;

  constructor(private router: Router, private eventService: EventService) {
    this.totalParticipants = this.eventService.getAll().length;
  }

  goToRegistration() {
    this.router.navigate(['/event-registration']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
