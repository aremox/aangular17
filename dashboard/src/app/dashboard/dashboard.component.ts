import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: './dashboard.component.html',
    styles: ``,
})
export class DashboardComponent { }
