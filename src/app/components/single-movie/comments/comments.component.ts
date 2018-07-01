import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../../../models/comments';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  comments;
  
  forma = new FormGroup({
    email : new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    name : new FormControl('',[Validators.required, Validators.pattern('/^[A-Z][a-z]{2,}$/')]),
    subject : new FormControl('',Validators.required),
    message : new FormControl('',Validators.required)
  });

  constructor(private route: ActivatedRoute, private service : CommentsService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (response: Comments[]) => {
        this.comments = response.filter( x => x.movieId == this.route.snapshot.params.id);
      }
    )
  }

  email(){
    return this.forma.get("email");
  }

  addComment(form){
    let values = form.value;
    values.movieId = this.route.snapshot.params.id;
    this.service.insert(values).subscribe(
      (response: Comments[]) => {
        console.log(response);
        this.comments = response.filter( x => x.movieId == this.route.snapshot.params.id);
      }
    )
  }

  deleteComment(comment){
    this.service.delete(comment).subscribe(
      (response: Comments[]) => {
        // this.comments = response.filter( x => x.movieId == this.route.snapshot.params.id);
        let index = this.comments.indexOf(comment);
      }
    );
  }

}
