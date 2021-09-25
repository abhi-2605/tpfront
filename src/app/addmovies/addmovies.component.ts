import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.css']
})
export class AddmoviesComponent implements OnInit {
addmovie={
  name:'',
  genre:'',
  year:'',
  director:'',
  plot:''
}
  constructor( private dataservice:MovieService) { }

  ngOnInit(): void {
  }
addmov(){
  console.log(this.addmovie)

  this.dataservice.addmovie(this.addmovie).subscribe((data: any)=>{
  console.log(data)
  })


  
}
}
