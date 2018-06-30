import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
    entry:any;

    constructor() {
        this.entry = {};
    }

    ngOnInit() {
    }

    saveEntry() {
        console.log('saveEntry()  entry=', this.entry);
    }
}
