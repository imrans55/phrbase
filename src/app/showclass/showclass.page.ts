
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';
//import { data } from 'jquery';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-showclass',
  templateUrl: './showclass.page.html',
  styleUrls: ['./showclass.page.scss'],
})
export class ShowclassPage implements OnInit {
  image: any;
  result: any;
  feature: any;
  constructor(private route: ActivatedRoute, private router: Router, private functions: AngularFireFunctions, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special && params.result && params.feature) {
        this.image = JSON.parse(params.special);
        this.result = JSON.parse(params.result);
        this.feature = JSON.parse(params.feature);
      }
      switch (this.feature) {
        case 'TEXT_DETECTION': {
          this.result = this.result.responses[0].textAnnotations;
          this.callCloudFunction(this.result);
          break;
        }
        
        default: {
          this.result = this.result.responses[0].labelAnnotations;
        }
      }
      console.log(this.result);
    });
  }
  callCloudFunction(data) {
    
      
    // Use the function name from Firebase
    const callable = this.functions.httpsCallable('myUppercaseFunction');

    // Create an Observable and pass any data you want to the function
    const obs = callable({ coolMsg: data });
    

    obs.subscribe(async res => {
          await this.firebaseService.createOTask({
           
           ocr: res.msg,
           
         });
         this.router.navigate(["/tabs/ocr"]);
    }); }
}
