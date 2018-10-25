import { Component, OnInit, ViewChild } from '@angular/core';
import {ClrWizard} from "@clr/angular";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild("wizardxl") wizardExtraLarge: ClrWizard;

  xlOpen: boolean = false;

  openWizard(event) {
    // console.log(event);
    this.xlOpen = true;
  }

}
