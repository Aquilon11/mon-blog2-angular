import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { Post } from '../models/Post.model'
import * as firebase from 'firebase'
import { DataSnapshot } from '@firebase/database-types'

@Injectable()
export class PostService {
  posts: Post[] = []
  postsSubject = new Subject<Post[]>()

  constructor() {
    this.getPosts()
  }

  emitPosts() {
    this.posts.sort((a, b) => b.loveIts - a.loveIts)
    this.postsSubject.next(this.posts.slice())
  }

  savePosts() {
    firebase
      .database()
      .ref('/posts')
      .set(this.posts)
  }

  getPosts() {
    firebase
      .database()
      .ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : []
        this.emitPosts()
      })
  }

  loveIts(i: number) {
    this.posts[i].loveIts++
    this.savePosts()
    this.emitPosts()
  }

  dontLoveIts(i: number) {
    this.posts[i].loveIts--
    this.savePosts()
    this.emitPosts()
  }

  supprimerPost(i: number) {
    this.posts.splice(i, 1)
    this.savePosts()
    this.emitPosts()
  }

  addPost(newPost: Post) {
    this.posts.push(newPost)
    console.log(newPost)
    this.savePosts()
    this.emitPosts()
  }
}
