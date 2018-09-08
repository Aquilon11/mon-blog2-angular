import { Component, Input } from '@angular/core'
import { PostService } from '../services/post.service'
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent {
  @Input()
  item
  @Input()
  index: number

  constructor(private postService: PostService) {}

  loveIts() {
    this.postService.loveIts(this.index)
  }

  dontLoveIts() {
    this.postService.dontLoveIts(this.index)
  }

  supprimerPost() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
      this.postService.supprimerPost(this.index)
    }
  }

  getColor(i: number) {
    if (this.item.loveIts > 0) {
      return 'green'
    } else if (this.item.loveIts < 0) {
      return 'red'
    } else return 'black'
  }
}
