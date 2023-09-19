//轮播图数据
export type Swiper = {
  src: string
}
//图书信息
export type book = {
  author?:string,
  id: string,
  imgurl: string,
  name: string,
  synopsis: string
}
//人文，历史，音乐，艺术数据
export type Books = {
  headerTitle: string
  books: book[]
}
//猜你喜欢数据
export type Rebooks = {
  id: string
  name: string
  src: string
}
//首页数据
export type Appindex = {
  Rebooks: Rebooks[]
  bookResources: Books[]
  swiperImages: Swiper[]
}

export type singerTs = {
  id?:string|number
  imgurl?:string
  name: string
  synopsis: string
}

//音乐数据
export type musicResourecs = {
  cover: string
  id: number | string
  name: string
  src: string
  singer: singerTs
}
