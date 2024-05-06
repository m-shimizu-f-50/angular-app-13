import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8000/users'; // Lumen APIのURL

  constructor(private http: HttpClient) {}

  /*
  MEMO
  RxJSを用いて非同期通信でユーザー一覧を取得
  明示的にpipeメソッドとmapオペレーターを使用しています。(加工せずそのままreturnする場合は簡略化できる)
  Observableは、時間とともに0個以上のイベントを非同期的に生成するコンテナまたはラッパーを表す。
  pipeメソッドは、Observableに対して一連のオペレータを適用するために使用されます。これにより、データを加工し、購読者に最終的な結果を提供する前に変換を行うことができる
  「オペレーター」とは、Observableが生成するデータストリームに対して様々な処理を行う関数(filter,map,catchError,tap など)
  */
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(map((response) => response));
  }

  // 簡略化した場合
  // getUsers(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }
}
