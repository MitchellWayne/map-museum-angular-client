import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-searchbar',
  templateUrl: './header-searchbar.component.html',
  styleUrls: ['./header-searchbar.component.scss']
})
export class HeaderSearchbarComponent implements OnInit {
  @Input() searchActive!: boolean;
  searchQuery: string = "";

  @Output() onInputChange: EventEmitter<string> = new EventEmitter();
  @Output() onExecuteSearch: EventEmitter<any> = new EventEmitter();
  
  faSearchIcon = faSearch;
  faClearIcon = faTimes;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSearch() {
    this.onExecuteSearch.emit();
  }

  onClear() {
    this.onInputChange.emit('');
    this.searchQuery = '';
  }

  onChange() {
    this.onInputChange.emit(this.searchQuery);
  }
}
