/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  appPages = [
    {title: 'Favorites', url: '/folder/Favorites', icon: 'heart'},
    {title: 'My songs', url: '/folder/Favorites', icon: 'archive'},
    {title: 'Setlists', url: '/folder/Archived', icon: 'caret-forward'},
    {title: 'History / Top', url: '/folder/Trash', icon: 'refresh'},
    {title: 'Chords', url: '/folder/Spam', icon: 'musical-notes'},
  ];
  labels = [
    {title: 'Settings', url: '/folder/Inbox', icon: 'help'},
    {title: 'F.A.Q.', url: '/folder/Favorites', icon: 'settings'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
