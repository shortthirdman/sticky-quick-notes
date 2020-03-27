import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { QuickNotes } from './core/model/quick-note';
import { ApplicationService } from './shared/services/application.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private notes: QuickNotes = [];
  createNoteForm: FormGroup;
  newNote: boolean = false;
  stickyNotes: any[] = [];
  searchText: any;

  constructor(private appService: ApplicationService, private titleService: Title) {
    this.titleService.setTitle('Quick Sticky Notes' + ' v' + environment.version);
    this.initializeForm();
  }

  ngOnInit() {
  }

  /**
   * @description Searchs notes
   * @author ShortThirdMan USA Inc
   * @param event 
   */
  searchNotes(event: any) {
    let query = event.query;
    this.stickyNotes = [];
    for (let i = 0; i < this.notes.length; i++) {
      let note = this.notes[i];
      if ((note.title.toLowerCase().indexOf(query.toLowerCase()) === 0) || (note.content.toLowerCase().indexOf(query.toLowerCase()) === 0)) {
        this.searchText = note;
        this.stickyNotes.push(note);
      }
    }
  }

  showNote() {
    this.appService.setStickyNote(this.stickyNotes[0]);
    this.searchText = undefined || '';
  }

  private initializeForm() {
    this.appService.notesState.subscribe((notes) => { this.notes = notes; });
    this.createNoteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  saveNote() {
    const content = this.createNoteForm.get('content').value;
    const topic = this.createNoteForm.get('title').value;
    const createdAt = new Date().getTime();
    const length = this.notes.length;
    if (this.notes) {
      this.notes.push({ id: length + 2, title: topic, content: content, createdAt: createdAt, lastUpdated: null });
      this.appService.setStickyNotes(this.notes);
    }
    this.newNote = false;
    this.appService.notify('info', 'A new sticky note was added successfully.', 'New Note');
    this.initializeForm();
  }
}
