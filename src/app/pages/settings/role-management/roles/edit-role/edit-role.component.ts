import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  permissions: any [] = [
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
    {description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
