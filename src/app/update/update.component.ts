import { Component, OnInit } from '@angular/core';
import{MovieService} from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  moviedatas={
    _id:'',
    id: "",
    title:'',
    year:'',
    genres:[
    ],
    director:'',
    actors:'',
    plot:'',
    posterUrl:''
  }
  constructor(private dataservice : MovieService , private router :Router) { }

  ngOnInit(): void {
    let id= localStorage.getItem("updateid")

    this.dataservice.up(id).subscribe((data)=>{
      this.moviedatas=JSON.parse(JSON.stringify(data));
  })
  }
  update(){
    this.dataservice.editmovie(this.moviedatas);   
    alert("Success");
    this.router.navigate(['home']);

  }

}
