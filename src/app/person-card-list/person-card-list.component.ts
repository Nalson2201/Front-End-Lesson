import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-person-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-card-list.component.html',
  styleUrl: './person-card-list.component.css'
})
export class PersonCardListComponent {
allPersons: any;

}
