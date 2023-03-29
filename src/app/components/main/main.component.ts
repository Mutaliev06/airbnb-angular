import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // clickId: number = 0;
  //
  // public touchMarker(id: number){
  //   this.clickId = id
  //   console.log('clickId', this.clickId)
  // }

  clickId:number = 0;
  public onAClicked(id: number){
    console.log(id);
    this.clickId = id;
  }

}
