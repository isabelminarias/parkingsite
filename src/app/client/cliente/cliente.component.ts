import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, NgControl } from '@angular/forms'

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';


import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clientService : ClientService ) { }

  ngOnInit() {
  	this.resetForm()
  }

  onSubmit(form: NgForm){

  	if(form.value.$key=='')
  		this.clientService.insertClient(form.value);
  	else
  		this.clientService.updateClient(form.value);
  	this.resetForm(form);
  }

  resetForm(form?: NgForm){
  	if(form != null){
	  	form.reset();
	  	this.clientService.selectedClient = {
	  		$key : '',
	  		name : '',
	  		ci : '',
	  		dbcode : null,
	  		telf : '',
	  		pcodes : null,
	  		direction: '',
			payment : '',
			active : false,
			error: false,
			errorComment : ''

  	}
  }



}

	onDelete(form : NgForm){
	  	if( confirm("Seguro de que desea eliminar este registro de cliente?") == true){
	  		this.clientService.deleteClient(form.value.$key);
	  		this.resetForm(form);
	  	}
	  }
}
	