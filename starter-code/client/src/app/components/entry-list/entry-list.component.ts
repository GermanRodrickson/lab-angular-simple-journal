import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Array<any>

  constructor(private journalEntries: JournalEntriesService) { }

  ngOnInit() {
    this.journalEntries.listAll()
      .then((data) => {
        this.entries = data;
      });
  }

}
