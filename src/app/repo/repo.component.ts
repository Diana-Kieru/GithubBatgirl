import { User } from './../user';


import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { GitSearchService } from '../git-search.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  user!:User
  repository!:Repository | any

  constructor(private service:GitSearchService) { 
    this.repository = new Repository('')
  }
  findingUser(user:any){
    this.service.findingUser(user).then((success)=>{
      this.user = this.service.user
    })
    this.service.findRepos(user).then((success)=>{
      this.repository = this.service.repository
    })
  }
  

  ngOnInit(): void {
    this.findingUser('Diana-Kieru')

  }

}
