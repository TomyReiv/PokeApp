import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeApp';

  @ViewChild('drawer') drawer!: MatDrawer;
  isDrawerOpened = true;


  constructor(private breakpointObserver: BreakpointObserver) {}
  
  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      if (result.matches) {
        this.isDrawerOpened = false;
        this.drawer.close();
      } else {
        this.isDrawerOpened = true;
        this.drawer.open();
      }
    });
  }
}
