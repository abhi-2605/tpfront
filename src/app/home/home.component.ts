import { Component, OnInit } from '@angular/core';
import{MovieService} from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
role:any;
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
addmovie(){
  if (this.role == "true"){
    console.log("admin")
    this.router.navigate(["addmovie"])
  }
  else{
    console.log("user")
    
  }
}
review(id:any){

localStorage.setItem('revid', id.toString())
this.router.navigate(['review'])
}

del(id:any){
  this.dataservice.del(id. title)
  .subscribe((data) => {
    this.moviedatas = this.moviedatas.filter(p => p !== id);
  })
}
update(id:any){
  let ab = id.title
  localStorage.setItem('updateid', ab.toString())
  this.router.navigate(['update']);
}
logout(){
  localStorage.clear()
  this.router.navigate([""]);
}
}
