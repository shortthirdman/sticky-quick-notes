import { Injectable } from '@angular/core';
import { MessageService } from 'primeng';
import { Subject } from 'rxjs';
import { QuickNote, QuickNotes } from 'src/app/core/model/quick-note';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private cacheStorage: Map<string, string> = new Map<string, string>();

  private noteSubject = new Subject<QuickNote>();
  noteState = this.noteSubject.asObservable();

  private notesSubject = new Subject<QuickNotes>();
  notesState = this.notesSubject.asObservable();

  private updateSubject = new Subject<boolean>();
  updateState = this.updateSubject.asObservable();

  constructor(private toastService: MessageService) { }

  /**
   * @description Sets sticky note
   * @author Swetank Mohanty
   * @param note 
   */
  setStickyNote(note: QuickNote) {
    this.noteSubject.next(note);
  }

  /**
   * @description Sets sticky notes
   * @author Swetank Mohanty
   * @param notes 
   */
  setStickyNotes(notes: QuickNotes) {
    this.notesSubject.next(notes);
  }

  /**
   * @description Sets update option
   * @author ShortThirdMan USA Inc
   * @param value 
   */
  setUpdateOption(value: boolean) {
    this.updateSubject.next(value);
  }

  /**
   * @description Notification Growl
   * @author Swetank Mohanty
   * @param severity 
   * @param message 
   * @param title 
   * @param [life] 
   */
  notify(severity: string, message: string, title: string, life?: number) {
    this.toastService.clear();
    this.toastService.add({ severity: severity, key: 'main-toast', detail: message, summary: title, life: life });
  }

  /**
   * Sets the {@link Map<K,V>} pair in the map
   * @author Swetank Mohanty
   * @param key the {@link Map} key to set
   * @param data the value to set
   */
  setCacheStorage(key: string, data: any) {
    this.cacheStorage.set(key, JSON.stringify(data));
  }

  /**
   * @description Gets cache storage
   * @author Swetank Mohanty
   * @param key 
   * @returns  
   */
  getCacheStorage(key: string) {
    if (this.cacheStorage.get(key)) {
      return JSON.parse(this.cacheStorage.get(key));
    } else {
      return false;
    }
  }

  /**
   * @description Clears cache storage all
   * @author Swetank Mohanty
   */
  clearCacheStorageAll() {
    this.cacheStorage.clear();
  }

  /**
   * @description Deletes cache storage
   * @author Swetank Mohanty
   * @param key 
   * @returns  
   */
  deleteCacheStorage(key: string) {
    if (this.cacheStorage.has(key)) {
      this.cacheStorage.delete(key);
    } else {
      return;
    }
  }

  /**
   * @description Replaces cache storage
   * @author Swetank Mohanty
   * @param key 
   * @param value 
   */
  replaceCacheStorage(key: string, value: any) {
    if (this.cacheStorage.has(key)) {
      this.cacheStorage.delete(key);
      this.cacheStorage.set(key, JSON.stringify(value));
    } else {
      this.cacheStorage.set(key, JSON.stringify(value));
    }
  }

  /**
   * @description Gets index to remove
   * @author Swetank Mohanty
   * @param array 
   * @param note 
   * @returns  
   */
  getIndexToRemove(array: QuickNotes, note: QuickNote) {
    return array.map((item) => item.id).indexOf(note.id);
  }
}
