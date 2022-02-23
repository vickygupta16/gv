import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  projectsList = [
    {
      title: 'Time Table Generator',
      year: '2020',
      projectType: 'Web Application',
      techs: 'ASP.NET MVC, MSSQL',
      githubRepo: 'https://github.com/vickygupta16/TimeTableGenerator',
      captures: '../../assets/captures/TimeTableGenerator-ASPDOTNET-DB_UI.pdf',
    },
    {
      title: 'Meal Delivery System',
      year: '2019',
      projectType: 'Web Application',
      techs: 'ASP.NET MVC, MSSQL',
      githubRepo: 'https://github.com/vickygupta16/MealDeliverySystem',
      captures: '../../assets/captures/MealDeliverySystem-ASPDOTNET-DB_UI.pdf',
    },
    {
      title: 'Pothole Complaint System',
      year: '2018',
      projectType: 'Web Application',
      techs: 'PHP, MySQL, Laravel',
      githubRepo: 'https://github.com/vickygupta16/PotholeComplaintSystem',
      captures:
        '../../assets/captures/Pothole Complaint System-Laravel-DB_UI.pdf',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
