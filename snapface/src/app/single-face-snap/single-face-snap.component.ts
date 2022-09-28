import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.services";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  bDescription!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.bDescription = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    // if (this.bDescription === 'Oh Snap!') {
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    //   this.bDescription = 'Oops, unSnap!';
    // } else {
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    //   this.bDescription = 'Oh Snap!';
    // }
  }
}
