import { Component, OnInit } from '@angular/core';
import{MovieService} from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
checkedIdx=-1;
contras:any;
contr:String="";
  constructor(private dataservice : MovieService , private router:Router) { }
  userdata={
    name:'',
    email:'',
    pass:'',
    num:'',
    role:'',
    userrole:''
  }
  logindata={
    email:'',
    pass:''
  }
  msg={
    msg:''
  }
  ngOnInit(): void {
  }
  emailpattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  pwdpattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  phonepattern = "^[7-9][0-9]{9}$"

  adduser(){
    this.dataservice.registerdata(this.userdata)
    .subscribe((data)=>{
      this.msg=JSON.parse(JSON.stringify(data));
  
  
      if(this.msg.msg=="already there"){
        alert(this.userdata.name + " already registered")
      } else if(this.userdata.name=="suc"){
        alert('Sucess')
       }
      else{
      alert("Sucess")
      }
  
    })
  }
  login(){
    this.dataservice.login(this.logindata)
  .subscribe(data =>{
   
   if(data.toString()=="Invalid password"){
     alert('invalid password')
   }
   else if(data.toString()=="User not resgistered"){
    alert('User not resgistered')
   }
   else{
  localStorage.setItem('token', data.toString())
   this.router.navigate(["home"])
   }
  })
  }
}
