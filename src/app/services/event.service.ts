import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private storageKey = 'participants';

  //get all the participants from the local storage
  getAll(): Participant[] {
    const data = localStorage.getItem(this.storageKey);
    return data?JSON.parse(data) : [];
  }

  //add a new participant and save his/her details in local storage
  add(participant: Participant): void {
    const list = this.getAll();
    list.push(participant);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  //delete a participant by their id
  delete(id: number): void {
    const list = this.getAll().filter(p => p.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }
}
