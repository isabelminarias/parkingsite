import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Client } from './client.model';

@Injectable()
export class ClientService {

	clientList : AngularFireList<any>;
	selectedClient: Client = new Client();		

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
  	this.clientList = this.firebase.list('clients');
  	return this.clientList;
  }

  insertClient(client: Client){
  	this.clientList.push({
  		name: client.name,
  		ci: client.ci,
  		dbcode: client.dbcode,
  		telf: client.telf
  	});
  }

  updateClient(client: Client){
  	this.clientList.update(client.$key,{
  		name : client.name,
  		ci : client.ci,
  		dbcode : client.dbcode,
  		telf : client.telf
  	})
  }

  deleteClient(key : string){
  	this.clientList.remove(key);
  }
}
