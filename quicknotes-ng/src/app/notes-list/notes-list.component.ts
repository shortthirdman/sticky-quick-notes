import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuickNotes, QuickNote, QUICK_NOTES_DATA } from '../core/model/quick-note';
import { ApplicationService } from '../shared/services/application.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit, OnDestroy {

  notes: QuickNotes;
  private notesChanged: Subscription;

  /**
   * Creates an instance of `NotesListComponent`
   * @author Swetank Mohanty
   * @param appService 
   */
  constructor(private appService: ApplicationService) {
    this.notes = QUICK_NOTES_DATA;
  }

  /**
   * @description Initializes `NotesListComponent`
   * @author Swetank Mohanty
   */
  ngOnInit() {
    this.notes.sort();
    this.appService.setStickyNotes(this.notes);
    this.notesChanged = this.appService.notesState.subscribe(notes => {
      this.notes = notes;
    });
  }

  /**
   * @description Destroys `NotesListComponent`
   * @author Swetank Mohanty
   */
  ngOnDestroy() {
    if (this.notesChanged) {
      this.notesChanged.unsubscribe();
    }
  }

  /**
   * @description Selects note
   * @author Swetank Mohanty
   * @param event 
   * @param note 
   */
  selectNote(event: any, note: QuickNote) {
    // for (const obj of this.notes) {
    //   if (note.id === obj.id) {
    //     note.isSelected = true;
    //     this.notes.find()
    //   }
    // }
    this.appService.setStickyNote(note);
  }
}
