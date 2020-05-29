import {Directive, OnInit, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit{

  @Input('appForIn') numbers: number[];

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngOnInit(): void{
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}
