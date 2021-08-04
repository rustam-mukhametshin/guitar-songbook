import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  labels = [
    {title: 'Search', url: '/folder/Inbox', icon: 'search'},
    {title: 'Reload', url: '/folder/Favorites', icon: 'reload'},
    {title: 'Submenu', url: '/folder/Favorites', icon: 'ellipsis-vertical'},
  ];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
