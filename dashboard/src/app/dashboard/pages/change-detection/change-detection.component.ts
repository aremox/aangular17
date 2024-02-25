import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    selector: 'app-change-detection',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, TitleComponent],
    template: `

    <app-title [titulo]="currentFramework()" />
    <pre>{{ frameworkAsSignals() | json}}</pre>
    <pre>{{ frameworkAsProperty | json}}</pre>

    `,
    styles: ``,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignals().name}`
  );

  public frameworkAsSignals = signal({
    name: 'Angular',
    release: 2016,
  });
  public frameworkAsProperty = {
    name: 'Angular',
    release: 2016,
  };

  constructor(){
    setTimeout(
    () => {
      this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignals.update( value => ({
        ...value,
        name: 'React'
      })
      )
      console.log('Hecho')
    },3000
    );
  }

}
