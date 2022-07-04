import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-policy',
  templateUrl: './user-policy.component.html',
  styleUrls: ['./user-policy.component.scss']
})
export class UserPolicyComponent implements OnInit {

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
