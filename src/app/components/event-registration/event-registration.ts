import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {Participant} from '../../models/participant';

@Component({
  selector: 'app-event-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './event-registration.html',
  styleUrl: './event-registration.css'
})
export class EventRegistrationComponent {

  regForm: FormGroup;
  participants: Participant[] = [];

  constructor(private fb: FormBuilder, private router: Router, private eventService: EventService){
    this.regForm = this.fb.group({
      name:      ['', Validators.required],
      email:     ['', [Validators.required, Validators.email]],
      eventName: ['', Validators.required],
      mobile:    ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });

    this.participants = this.eventService.getAll();
  }

  get f(){
    return this.regForm.controls;
  }

  onAdd(){
    if (this.regForm.invalid){
      this.regForm.markAllAsTouched();
      return;
    }

    const newParticipant: Participant ={
      id: Date.now(),
      name:      this.regForm.value.name,
      email:     this.regForm.value.email,
      eventName: this.regForm.value.eventName,
      mobile:    this.regForm.value.mobile
    };

    this.eventService.add(newParticipant);
    this.participants = this.eventService.getAll(); 
    this.regForm.reset();
  }

  onDelete(id: number){
    this.eventService.delete(id);
    this.participants = this.eventService.getAll();
  }

  goBack(){
    this.router.navigate(['/dashboard']);
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
