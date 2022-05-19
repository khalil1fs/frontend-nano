import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Formation} from "../../../../../controller/model/formation.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.css']
})
export class FormationAddComponent implements OnInit {
  public error: string = null;

  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.formationService.save().subscribe(formation   => {
      this.formations.push({...formation});
      this.selectedFormation = new Formation();
    }, (error: HttpErrorResponse) => {
      this.error = error.error;
      console.log(error);
    });
  }

  /*  Getters and Setters  */
  focus: boolean;
  focus1: boolean;
  get selectedFormation(): Formation{
    return this.formationService.selectedformation;
  }
  set selectedFormation(value: Formation) {
    this.formationService.selectedformation = value;
  }
  get formations(): Array<Formation>{
    return this.formationService.formations;
  }


}
