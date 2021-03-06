import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { PostListComponent } from './post-list/post-list.component'
import { PostListItemComponent } from './post-list-item/post-list-item.component'
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component'
import { Routes, RouterModule } from '@angular/router'
import { PostService } from './services/post.service'
import { NewPostComponent } from './new-post/new-post.component'

const appRoutes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
  },
  { path: '', component: PostListComponent },
  { path: 'nouveau', component: NewPostComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    FourOhFourComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
