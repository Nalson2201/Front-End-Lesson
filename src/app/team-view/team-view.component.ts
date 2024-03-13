import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PeronsService } from '../services/perons.service';
import { Person } from '../shared/model/person';
import { PersonCardComponent } from "../person-card/person-card.component";

@Component({
    selector: 'app-team-view',
    standalone: true,
    templateUrl: './team-view.component.html',
    styleUrl: './team-view.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        PersonCardComponent
    ]
})
export class TeamViewComponent implements OnInit {
  allPersons: Person[] = [];

  constructor(private personServise : PeronsService ){}

  ngOnInit(): void {
    this.allPersons = this.personServise.list();
  }
 }
