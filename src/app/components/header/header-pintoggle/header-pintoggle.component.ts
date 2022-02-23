import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header-pintoggle',
  templateUrl: './header-pintoggle.component.html',
  styleUrls: ['./header-pintoggle.component.scss']
})
export class HeaderPintoggleComponent implements OnInit {
  toggleValue: boolean = true;

  constructor(private uiService : UiService) { }

  ngOnInit(): void {
  }

  toggleChanged(){
    this.uiService.setPinsActive(this.toggleValue);
  }

}
