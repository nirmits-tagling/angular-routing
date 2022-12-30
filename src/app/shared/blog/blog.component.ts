import { Component, OnInit } from '@angular/core';

export interface Blog {

  title:string,
  description:string,
  readmore:string,
  img:string,
  button:string
  
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  blogs:Blog[] = [{

    title: 'Python vs Java Comparison Of',
    description: 'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
    readmore: 'Read More ->',
    img:'../assets/images/Python-vs-Java.png',
    button:'Python'
  },
   {
 
   title: 'Node Js',
   description: 'Best Practices for Node.js Application Development:...',
    readmore: 'Read More ->',
    img:'../assets/images/Node.js-Application.png',
    button:'NodeJs'
   },{
  
    title: 'JavaScript vs Ruby On Rails: What...',
    description: 'Quick Summary: Ruby on Rails and JavaScript both languages are both widely popular among',
    readmore: 'Read More ->',
    img:'../assets/images/Kotlin-vs-Java.png',
    button:'RoR'
}]

  constructor() { }

  ngOnInit(): void {
   
  }

}
