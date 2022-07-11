import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../service/master.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  form: FormGroup;
  flightlist: any;
  searchText: any;
  editMode: boolean = false;
  currentId: string;
  @ViewChild('pForm') form2: NgForm;

  constructor(private service: MasterService, private http: HttpClient, private router: Router, private location: Location , private formBuilder: FormBuilder) { 
    this.service.GetFlight().subscribe(result=>{
      this.flightlist=result;
    });
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tailNumber: '',
      flightID: '',
      takeoff: '',
      landing: '',
      duration: ''
    });
  }

  submit(): void{
    if (!this.editMode)
      this.service.PostFlight(this.form.getRawValue())
      .subscribe(()=> this.reload());
    else
      this.service.PutFlight(this.currentId, this.form.getRawValue())
      .subscribe(()=> this.reload());
  }

  reload(){
    window.location.reload();
  }

  OnDelete(data: any){
    this.service.DeleteFlight(data)
    .subscribe(()=> this.reload())
  }

  OnModify(id: any){
    this.currentId = id;
    let currentList = this.flightlist.find((p)=>{return p._id == id})
    console.log(this.form2);

    this.form.setValue({
      tailNumber: currentList.tailNumber,
      flightID: currentList.flightID,
      takeoff: currentList.takeoff,
      landing: currentList.landing,
      duration: currentList.duration
    });

    this.editMode = true;
  }

}
