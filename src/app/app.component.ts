import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  code1 = `&#x3C;rocket-edit type=&#x22;text&#x22; [(ngModel)]=&#x22;textValue&#x22; (Save)=&#x22;save($event)&#x22; [name]=&#x22;editableText&#x22; [required]=&#x22;true&#x22;
  [placeholder]=&#x22;placeholder&#x22; [title]=&#x22;title&#x22; [minlength]=&#x22;1&#x22; [maxlength]=&#x22;10&#x22;&#x3E;&#x3C;/rocket-edit&#x3E;`;
  code2 = `&#x3C;rocket-edit type=&#x22;number&#x22; [(ngModel)]=&#x22;numberValue&#x22; (Save)=&#x22;save($event)&#x22; [name]=&#x22;editableNumber&#x22; [min]=&#x22;1&#x22;
  [max]=&#x22;Infinity&#x22; [required]=&#x22;true&#x22; [placeholder]=&#x22;placeholder&#x22; [title]=&#x22;title&#x22;&#x3E;&#x3C;/rocket-edit&#x3E;`;
  code3 = `&#x3C;rocket-edit type=&#x22;time&#x22; [(ngModel)]=&#x22;timeValue&#x22; (Save)=&#x22;save($event)&#x22; [name]=&#x22;editableTime&#x22; [required]=&#x22;true&#x22;
  [title]=&#x22;title&#x22; [step]=&#x22;any&#x22;&#x3E;&#x3C;/rocket-edit&#x3E;`;
  code4 = `&#x3C;rocket-edit type=&#x22;select&#x22; [(ngModel)]=&#x22;selectedValue&#x22; (Save)=&#x22;save($event)&#x22; [name]=&#x22;editableSelect&#x22;
  [required]=&#x22;true&#x22; [title]=&#x22;title&#x22; [options]=&#x22;options&#x22;&#x3E;&#x3C;/rocket-edit&#x3E;`;
  tsCode = `
  textValue = &#x27;&#x27;;<br/>
  numberValue = &#x27;&#x27;;<br/>
  timeValue = &#x27;&#x27;;<br/>
  selectedValue = &#x27;&#x27;;<br/>
  options = [<br/>
    { key: 1, value: &#x27;ABC&#x27; },<br/>
    { key: 2, value: &#x27;PQR&#x27; }<br/>
  ];<br/>
  save(v) {<br/>
    console.log(v);<br/>
  }`;
  title = 'Rocket Edit';
  textValue = '';
  numberValue = '';
  timeValue = '';
  selectedValue = false;
  options = [{key: true, value: 'Yes'}, {key: false, value: 'No'}];
  save(v) {
    console.log(v);
  }
}
