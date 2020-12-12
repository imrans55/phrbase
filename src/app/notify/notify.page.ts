import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.page.html',
  styleUrls: ['./notify.page.scss'],
})
export class NotifyPage implements OnInit {
  scheduled = [];

  constructor(private plt:Platform, private localNotifications: LocalNotifications, private alertCtrl: AlertController ) {

    this.plt.ready().then(() =>{
      this.localNotifications.on('click').subscribe(res => {
        console.log('click: ', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);


      });
      this.localNotifications.on('trigger').subscribe(res => {
        console.log('trigger: ', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);

      });
    });
   }

  ngOnInit() {
  }
  clearAll(){
    this.localNotifications.clearAll()

  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Medicine Notification',
      text: 'It is time to have your meds',
      data: {mydata: 'Hiiden Message'},
      trigger: { in:5, unit: ELocalNotificationTriggerUnit.SECOND }


    })

  }

  recurringNotification() {
    this.localNotifications.schedule({
      id: 12,
      title: 'Medicine Notification',
      text: 'Daily Medicine remainder',
     
      trigger: { every: ELocalNotificationTriggerUnit.DAY }
    });

  }

  repeatingDaily() {

    this.localNotifications.schedule({
      id: 22,
      title: 'Medicine Notification',
      text: 'It is time to eat your meds',
     
      trigger: { every: {hour: 12} }
    });

  }
  getAll() {
    this.localNotifications.getAll().then(res => {
      this.scheduled = res;
    })

  }

  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['OK']

    }).then(alert => alert.present());
  }


}
