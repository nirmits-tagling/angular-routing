import { Component, OnInit } from '@angular/core';

interface Services{
  button?: string,
  description?: string,
  tag?: string,
  img?: string,
  chooseustag ?:string,
  dropline ?:string,
  contactbtn ?:string
  }
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
 

  constructor() { }
  // @Input()
  services:Services[] = [
    
    {
      tag:'Find the right offers.'
    },
    {
    button: 'Learn More',
    description: 'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.',
    tag: 'Application Management and Modernisation',
    img:'../assets/../assets/images/mobile.png',
    },


   {
    img: '../assets/../assets/images/web-design-icon.webp',
    tag: 'Software Product Engineering',
    description: 'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.',
    button: 'Learn More',
   
  },

 {
    img: '../assets/../assets/images/testing-icon.webp',
    tag: 'Agile QA, Automation, and DevOps',
    description: 'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA, Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA ensures the quality of the software.',
    button: 'Learn More',
    
  },

 {
    img: '../assets/../assets/images/uiux-design-icon.webp',
    tag: 'Digital Strategy & Design',
    description: 'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
    button: 'Learn More',
    
  },

  {
    img: '../assets/../assets/images/software-development-1.png',
    tag: 'Software outsourcing company',
    description: 'Tagline Infotech is an experienced software outsourcing company that provides services for various businesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
    button: 'Learn More',
   
  },
 {
    tag : 'Dont know what to choose? ',
    description :"Drop us a line.",
    button : 'Contact Us'
  }
 ];


  
 

  ngOnInit(): void {
  }

}

