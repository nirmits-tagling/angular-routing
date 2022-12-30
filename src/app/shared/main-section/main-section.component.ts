import { Component, OnInit } from '@angular/core';


interface MainSection{
  softwaretag:string,
  itconsultanytag:string,
  servingtag:string,
  startuptag:string,
  innovationtag:string
  meetingbutton: string,
  backgroundimg:string,
  getquote:string
  changetag:string
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  mainsection:MainSection = {
    softwaretag:"Software Development Company",
    itconsultanytag:"& IT Consultancy",
    servingtag:"Serving",
    startuptag:"Start-UPs To Fortune 500",
    innovationtag:"With the help of Innovation and Technology, We give you the power to",
    changetag:"change the world with your ideas.",
    meetingbutton: "button",
    backgroundimg:"../assets/../assets/images/images.png",
    getquote:"Get Quote",
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
