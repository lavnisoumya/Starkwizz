import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstscreenComponent } from './firstscreen/firstscreen.component';
import { SecondscreenComponent } from './secondscreen/secondscreen.component';
import { ThirdscreenComponent } from './thirdscreen/thirdscreen.component';
import { FourthscreenComponent } from './fourthscreen/fourthscreen.component';
import { FivescreenComponent } from './fivescreen/fivescreen.component';
import { SixthscreenComponent } from './sixthscreen/sixthscreen.component';
import { SeventhscreenComponent } from './seventhscreen/seventhscreen.component';
import { EighthscreenComponent } from './eighthscreen/eighthscreen.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { KnowmorescreenComponent } from './knowmorescreen/knowmorescreen.component';
import { ParentscreenComponent } from './parentscreen/parentscreen.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TiktokscreenComponent } from './tiktokscreen/tiktokscreen.component';
import { HubComponent } from './hub/hub.component';
import { DynamoComponent } from './dynamo/dynamo.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { MyquizComponent } from './myquiz/myquiz.component';
import { BookfestComponent } from './bookfest/bookfest.component';
import { HubrepeatComponent } from './hub/hubrepeat/hubrepeat.component';
import { DailyquizComponent } from './myquiz/dailyquiz/dailyquiz.component';
import { CoupunComponent } from './myquiz/coupun/coupun.component';
import { InstructionbackendComponent } from './myquiz/dailyquiz/instructionbackend/instructionbackend.component';
import { Dailyquiz01Component } from './myquiz/dailyquiz/instructionbackend/dailyquiz01/dailyquiz01.component';


const appRoutes: Routes = [
    {path: '',component:SecondscreenComponent},
  {path: 'firstscreen',component:FirstscreenComponent},
  {path: 'termsandcondition',component:TermsandconditionComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'knowmore',component:KnowmorescreenComponent},
  {path:'parentscreen',component:ParentscreenComponent},
  {path: "thirdscreen",component:ThirdscreenComponent},
  {path: "fourthscreen",component:FourthscreenComponent},
  {path: "fivescreen",component:FivescreenComponent},
  {path: "sixthscreen",component:SixthscreenComponent},
  {path: "seventhscreen",component:SeventhscreenComponent},
  {path: "eighthscreen",component:EighthscreenComponent},
  {path: "teacherscreen",component:TeacherComponent},
  {path: "tiktokscreen",component:TiktokscreenComponent},
  {path:"hubs",component:HubComponent},
  {path:"dynamo",component:DynamoComponent},
  {path:"showcase",component:ShowcaseComponent},
  {path:"myquiz",component:MyquizComponent},
  {path:"bookfest",component:BookfestComponent},
  {path:"coupun",component:CoupunComponent},
  {path:"dailyquiz",component:DailyquizComponent},
  {path:"instructionbackend",component:InstructionbackendComponent},
  {path:"dailyquiz1",component:Dailyquiz01Component},


];
@NgModule({
  declarations: [
    AppComponent,
    FirstscreenComponent,
    SecondscreenComponent,
    ThirdscreenComponent,
    FourthscreenComponent,
    FivescreenComponent,
    SixthscreenComponent,
    SeventhscreenComponent,
    EighthscreenComponent,
    TermsandconditionComponent,
    PrivacypolicyComponent,
    KnowmorescreenComponent,
    ParentscreenComponent,
    TeacherComponent,
    TiktokscreenComponent,
    HubComponent,
    DynamoComponent,
    ShowcaseComponent,
    MyquizComponent,
    BookfestComponent,
    HubrepeatComponent,
    DailyquizComponent,
    CoupunComponent,
    InstructionbackendComponent,
    Dailyquiz01Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
