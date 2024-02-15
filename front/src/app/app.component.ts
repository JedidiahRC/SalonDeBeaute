import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  readonly APIUrl="http://localhost:5038/api/todoapp/";

  constructor(private http:HttpClient){

  }

  notes:any=[];

  refreshNotes(){
    this.http.get(this.APIUrl+'GetNotes').subscribe(data=>{
      this.notes=data;
    })
  }

  ngOnInit(){
    this.refreshNotes();
  }

  addNotes(){
    var newNotes=(<HTMLInputElement>document.getElementById("newNotes")).value;
    var formData=new FormData();
    formData.append("newNotes",newNotes);
    this.http.post(this.APIUrl+'AddNotes',formData).subscribe(data=>{
      alert(data);
      this.refreshNotes();
    })
  }

  deleteNotes(id:any){
    this.http.delete(this.APIUrl+'deleteNotes?id='+id).subscribe(data=>{
      alert(data);
      this.refreshNotes();
    })
  }


showSignUpForm: boolean = false;

showSignUp() {
this.showSignUpForm = true;
}

}
