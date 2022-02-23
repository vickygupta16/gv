import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.css'],
})
export class ResponsiveNavbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'About',
      icon: 'fa-solid fa-circle-info',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      pathToSection: '#about',
    },
    {
      label: 'Profession',
      icon: 'fa-solid fa-user-tie',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      pathToSection: '#profession',
    },
    {
      label: 'Projects',
      icon: 'fa-solid fa-laptop-code',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      pathToSection: '#projects',
    },

    {
      label: 'More',
      icon: 'fa-solid fa-list',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      pathToSection: '#more',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
