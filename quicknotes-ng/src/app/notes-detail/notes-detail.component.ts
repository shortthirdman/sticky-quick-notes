import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuickNote, QuickNotes } from '../core/model/quick-note';
import { ApplicationService } from '../shared/services/application.service';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss']
})
export class NotesDetailComponent implements OnInit, OnDestroy {

  private notes: QuickNotes;
  private selectedNote: QuickNote;
  private notesChanged: Subscription;
  private noteChanged: Subscription;

  note: QuickNote;
  editNoteForm: FormGroup;
  showUpdateNote: boolean = false;

  /**
   * Creates an instance of `NotesDetailComponent`
   * @author Swetank Mohanty
   * @param appService 
   */
  constructor(private appService: ApplicationService) {
    this.initializeForm();
    this.retrieveAllNotes();
  }

  private initializeForm() {
    this.editNoteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  /**
   * @description Initializes `NotesDetailComponent`
   * @author Swetank Mohanty
   */
  ngOnInit() {
    this.retrieveSelectedNote();
  }

  /**
   * @description Retrieves selected note
   * @author ShortThirdMan USA Inc
   */
  private retrieveSelectedNote() {
    this.noteChanged = this.appService.noteState.subscribe(noteObj => {
      if (noteObj) {
        this.note = noteObj;
      }
      else {
        this.note = null || undefined;
      }
    });
  }

  /**
   * @description Gets all notes
   * @author ShortThirdMan USA Inc
   */
  private retrieveAllNotes() {
    this.notesChanged = this.appService.notesState.subscribe((notes) => {
      if (notes && notes.length > 0) {
        this.notes = notes;
      }
    });
  }

  ngOnDestroy() {
    if (this.noteChanged) {
      this.noteChanged.unsubscribe();
    }
    if (this.notesChanged) {
      this.notesChanged.unsubscribe();
    }
  }

  /**
   * @description Deletes note
   * @author Swetank Mohanty
   * @param event 
   * @param note 
   */
  deleteNote(event: any, note: QuickNote) {
    this.retrieveAllNotes();
    const index = this.appService.getIndexToRemove(this.notes, note);
    this.notes.forEach((item) => {
      if (item.id === note.id) {
        this.notes.splice(index, 1);
      }
    });
    this.note = undefined;
    this.appService.setStickyNotes(this.notes);
  }

  /**
   * @description Edits note
   * @author Swetank Mohanty
   * @param event 
   * @param note 
   */
  editNote(event: any, note: QuickNote) {
    this.selectedNote = note;
    this.editNoteForm.get('title').patchValue(this.selectedNote.title);
    this.editNoteForm.get('content').patchValue(this.selectedNote.content);
    this.showUpdateNote = true;
  }

  updateNote() {
    this.retrieveAllNotes();
    const newTitle = this.editNoteForm.get('title').value;
    const newContent = this.editNoteForm.get('content').value;
    for (const item of this.notes) {
      if (item.id === this.selectedNote.id) {
        item.lastUpdated = new Date().getTime();
        item.content = newContent;
        item.title = newTitle;
        break;
      }
    }
    this.showUpdateNote = false;
    this.appService.setStickyNotes(this.notes);
  }
}
