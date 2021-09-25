import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getUserName(id:any) {
    return this.http.get("http://localhost:2222/username",{
    params: new HttpParams().append('token', id)
  })
  
  }

  constructor(private http:HttpClient) { }

  registerdata(item:any)
  {   
    return this.http.post("http://localhost:2222/register",{"data":item})
    
    
  }
  login(item:any)
  {   
    return this.http.post("http://localhost:2222/login",{"data":item})
    
}
getmov(){
  return this.http.get("http://localhost:2222/home")
}
loggedin(){
   
  return !!localStorage.getItem('token')
}

addmovie(item:any){
  return this.http.post("http://localhost:2222/addmovie",{"data":item})
}

review(id:any){
  return this.http.get("http://localhost:2222/review/"+id)
}

send(items:any){
  return this.http.post("http://localhost:2222/sendmsg",{"data":items})
}
getmsg(items:any){
  return this.http.post("http://localhost:2222/getmsg",{"data":items})
  
}
del(id:any){
  return this.http.delete("http://localhost:2222/remove/"+id)
}
logincheck(item:any)
  {   
    return this.http.post("http://localhost:2222/logincheck",{"data":item})
    
} 
role(){
   
  return !!localStorage.getItem('role')
}
delcom(id:any){
  return this.http.delete("http://localhost:2222/removecom/"+id)
}
up(id:any){
  return this.http.get("http://localhost:2222/up/"+id)
}
editmovie(data:any){
  
    return this.http.put("http://localhost:2222/update",data)
    .subscribe(data =>{console.log(data)})
}
}

