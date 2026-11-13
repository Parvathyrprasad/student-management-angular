import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create an instance', () => {
    const element = document.createElement('div');
    const directive = new Highlight(new ElementRef(element));

    expect(directive).toBeTruthy();
  });

  it('should highlight active students on mouse enter', () => {
    const element = document.createElement('div');
    const directive = new Highlight(new ElementRef(element));

    directive.appHighlight = true;
    directive.onMouseEnter();

    expect(element.style.backgroundColor).toBe('yellow');
  });

  it('should restore the original color on mouse leave', () => {
    const element = document.createElement('div');
    element.style.backgroundColor = 'white';

    const directive = new Highlight(new ElementRef(element));
    directive.appHighlight = true;
    directive.onMouseEnter();
    directive.onMouseLeave();

    expect(element.style.backgroundColor).toBe('white');
  });
});