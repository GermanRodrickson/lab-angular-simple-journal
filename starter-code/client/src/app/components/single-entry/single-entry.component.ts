import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { JournalEntriesService } from "../../services/journal-entries.service";

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  singleEntryId: String;
  singleEntry: Object = {};

  constructor(private route: ActivatedRoute, private journalEntryService: JournalEntriesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.singleEntryId = params.id;

      this.journalEntryService.getOneById(params.id)
        .then(data => {
        this.singleEntry = data;
        console.log(this.singleEntry)
      });
      
    })
    
  }

}
