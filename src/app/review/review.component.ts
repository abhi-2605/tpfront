import { Component, OnInit ,Input } from '@angular/core';
import { InputsModule } from 'angular-bootstrap-md';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


  constructor(private dataservice:MovieService) { }
  datas={
    _id:'',
    id: "",
    title:'',
    year:'',
    runtime:'',
    genres:[
    ],
    director:'',
    actors:'',
    plot:'',
    posterUrl:''
  }
  comment={
    id:'',
    msg:''
  }
  getmsgs=[{
    id:'',
    msg:''
  }]
  typingmsg:any = []
  rolecheck:any
  ngOnInit(): void {
    let id= localStorage.getItem("revid")
    this.rolecheck= localStorage.getItem("role")
    console.log(id)
    this.comment.id = (localStorage.getItem('revid') || "{}")
    this.dataservice.review(id).subscribe((data)=>{
      this.datas = JSON.parse(JSON.stringify(data))
      console.log(this.datas)
    })
    
    this.dataservice.getmsg(this.comment).subscribe((data)=>{
      this.getmsgs= JSON.parse(JSON.stringify(data))
      console.log(data)
    })
    
  }


  send(){
   
    
    this.dataservice.send(this.comment).subscribe((data)=>{
      
      
       console.log(data)
       })
  this.disp();

}


disp(){
  console.log('entred')
  
this.typingmsg.push(this.comment.msg)
this.comment.msg=""
}

del(id:any){
  this.dataservice.delcom(id._id)
  .subscribe((data) => {
    this.getmsgs = this.getmsgs.filter(p => p !== id);
  })
}

}
