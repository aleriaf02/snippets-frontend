import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetCodeComponent } from './snippet-code.component';

describe('SnippetCodeComponent', () => {
  let component: SnippetCodeComponent;
  let fixture: ComponentFixture<SnippetCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnippetCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
