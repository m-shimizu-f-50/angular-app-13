import { Component, OnInit } from '@angular/core';

interface Implementation {
  title: string;
  content: string;
  path: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  implementations: Implementation[] = [
    {
      title: 'Testコンポーネント',
      content:
        '何か実装を試したいときにこちらのコンポーネントを自由に使うコンポーネント',
      path: '/test',
    },
    {
      title: 'ユーザー一覧',
      content: 'ユーザー一覧情報をAPIで取得し、表示する機能',
      path: '/users',
    },
  ];

  ngOnInit(): void {}
}
