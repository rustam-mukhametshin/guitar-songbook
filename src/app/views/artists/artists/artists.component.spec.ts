/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtistsComponent } from './artists.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtistsService } from '../../../services/artists.service';
import { of } from 'rxjs';
import { Fake, Fake2 } from '../../../test/fake';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

fdescribe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;
  let artistsService: ArtistsService;
  let route: ActivatedRoute;
  let router: Router;
  let spyRoute: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        // IonicModule.forRoot()
      ],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    artistsService = TestBed.inject(ArtistsService);
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);

    spyOn(artistsService, 'getAll').and.callFake(t => {
      switch (t) {
        case 'favourite':
          // Todo: in work
          return of(Fake.artists);
        case 'custom':
          // Todo: return from storage
          return of(Fake2.artists);
        default:
          return of(Fake.artists);
      }
    });

    spyRoute = spyOn(route.snapshot.paramMap, 'get');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#initList should return favourite artists', done => {
    spyRoute.and.returnValue('favourite');

    component.ngOnInit();
    fixture.detectChanges();
    component.artists$
      .pipe(first())
      .subscribe(v => {
        expect(v).toEqual(Fake.artists);
        done();
      });
  });

  it('#initList should return custom artists', done => {
    // spyRoute.and.returnValue('custom');

    component.type = 'custom';
    component.ngOnInit();
    fixture.detectChanges();
    component.artists$
      .pipe(first())
      .subscribe(v => {
        expect(v).toEqual(Fake2.artists);
        done();
      });
  });

  it('#initList should return default artists', done => {
    component.ngOnInit();
    fixture.detectChanges();
    component.artists$
      .pipe(first())
      .subscribe(v => {
        expect(v).toEqual(Fake.artists);
        done();
      });
  });
});
