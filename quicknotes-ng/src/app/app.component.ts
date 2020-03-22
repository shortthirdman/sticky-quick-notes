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
  queryField: FormControl;

  constructor(private appService: ApplicationService, private titleService: Title) {
    this.titleService.setTitle('Quick Sticky Notes' + ' v' + environment.version);
    this.initializeForm();
  }

  ngOnInit() {
    this.queryField.valueChanges.subscribe(queryField => {
      const notes = this.notes.filter(item => { item.content === queryField || item.title === queryField })
      this.appService.setStickyNote(notes[0]);
    });
  }

  private initializeForm() {
    this.appService.notesState.subscribe((notes) => { this.notes = notes; });
    this.queryField = new FormControl('', Validators.minLength(1));
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
