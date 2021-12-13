import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seeker-kyc-requests',
  templateUrl: './seeker-kyc-requests.component.html',
  styleUrls: ['./seeker-kyc-requests.component.css']
})
export class SeekerKycRequestsComponent implements OnInit {

  userKycId: string;
  
  constructor() { }

  ngOnInit() {
  }

  requestKyc(){
    //value of input text is binded  to userKycId
  }

}