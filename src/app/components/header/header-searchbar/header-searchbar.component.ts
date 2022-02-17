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
  @Input() searchQuery!: string;

  @Output() onInputChange: EventEmitter<string> = new EventEmitter();
  
  faSearchIcon = faSearch;
  faClearIcon = faTimes;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchQuery);
  }

  onClear() {
    this.onInputChange.emit('');
  }

  onChange() {
    this.onInputChange.emit(this.searchQuery);
  }
}
