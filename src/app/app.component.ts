import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Songs list', url: '/folder/Inbox', icon: 'list' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'My songs', url: '/folder/Favorites', icon: 'archive' },
    { title: 'Setlists', url: '/folder/Archived', icon: 'caret-forward' },
    { title: 'History / Top', url: '/folder/Trash', icon: 'refresh' },
    { title: 'Chords', url: '/folder/Spam', icon: 'musical-notes' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
