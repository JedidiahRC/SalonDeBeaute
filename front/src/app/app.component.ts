import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  readonly APIUrl="http://localhost:5038/api/todoapp/";

  constructor(private http:HttpClient,private modalService: NgbModal){

  }

   public open(modal: any): void {
    this.modalService.open(modal);
  }

  notes:any=[];

  ngOnInit(){
    // this.refreshNotes();
  }


showSignUpForm: boolean = false;

showSignUp() {
this.showSignUpForm = true;
}

}
