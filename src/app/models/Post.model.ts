export class Post {
  title: string
  content: string
  loveIts: number
  created_at: string

  constructor(
    title: string,
    content: string,
    loveIts: number = 0,
    created_at: string = new Date(Date.now()).toLocaleString()
  ) {
    this.title = title
    this.content = content
    this.loveIts = loveIts
    this.created_at = created_at
  }
}
