import { Component, OnInit } from '@angular/core';
import{MovieService} from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
id:any
  constructor(private dataservice : MovieService , private router :Router) { }
  moviedatas=[{
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
  }]
  role:any
  ngOnInit(): void {
    this.dataservice.getmov().subscribe((data: any)=>{
      this.moviedatas = JSON.parse(JSON.stringify(data))
      console.log(this.moviedatas)
    })

    let id= localStorage.getItem("token")
   
    this.dataservice.getUserName(id).subscribe((data)=>{
      this.role=JSON.parse(JSON.stringify(data));
     console.log(this.role)
    })

  }
  review(id:any){

    localStorage.setItem('revid', id.toString())
    this.router.navigate(['review'])
    }
    logout(){
      localStorage.clear()
      this.router.navigate([""]);
    }

}
