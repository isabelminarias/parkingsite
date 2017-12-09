import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { ClientService } from './shared/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {

  constructor(private clientService : ClientService ) { }

  ngOnInit() {
  }

}
