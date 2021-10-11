import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAfterBestComponent } from './content-after-best.component';

describe('ContentAfterBestComponent', () => {
  let component: ContentAfterBestComponent;
  let fixture: ComponentFixture<ContentAfterBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAfterBestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAfterBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
