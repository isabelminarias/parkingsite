import { Component, OnInit } from '@angular/core';
	
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
	clientList: Client[];
  constructor(private clientService : ClientService ) { }

  ngOnInit() {
  	var x = this.clientService.getData();
  	x.snapshotChanges().subscribe(item => {
  		this.clientList = [];
  		item.forEach(element => {
  			var y = element.payload.toJSON();
  			y["$key"] = element.key;
  			this.clientList.push(y as Client);
  		})
  	})
  }

  onItemClick(cli : Client){
  	this.clientService.selectedClient = Object.assign({},cli);
  }

}
