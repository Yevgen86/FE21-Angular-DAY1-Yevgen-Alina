import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBestComponent } from './content-best.component';

describe('ContentBestComponent', () => {
  let component: ContentBestComponent;
  let fixture: ComponentFixture<ContentBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
