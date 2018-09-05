import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class PostService {
  postsSubject = new Subject<any[]>()

  posts = [
    {
      id: 0,
      title: 'Mon premier poste',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
      adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.`,
      loveIts: 0,
      created_at: new Date(Date.now()),
    },
    {
      id: 1,
      title: 'Mon deuxième poste',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
        adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.`,
      loveIts: 0,
      created_at: new Date(Date.now()),
    },
    {
      id: 2,
      title: 'Encore un poste',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
        adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.`,
      loveIts: 0,
      created_at: new Date(Date.now()),
    },
  ]

  constructor() {}

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice())
  }

  loveIts(i: number) {
    this.posts[i].loveIts++
    this.emitPostSubject()
  }

  dontLoveIts(i: number) {
    this.posts[i].loveIts--
    this.emitPostSubject()
  }

  getAppareilById(id: number) {
    const appareil = this.posts.find(s => {
      return s.id === id
    })
    return appareil
  }
}
