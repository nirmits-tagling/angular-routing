import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Input()
   headernavcontent:any;

  btnHeaderType:string ="button"
  getquote:string = "Get Quote"
  taglinelogo:string = "../assets/../assets/images/tagline.png"
  headernav:string[]=["Case Study","About Us","Technology","Industry",'Our Blog']
  constructor() { }

  ngOnInit(): void {
    
  }

}
