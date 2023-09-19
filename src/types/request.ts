export type Data<T> = {
content: any;
list: { author?: string | undefined; id: string; imgurl: string; name: string; synopsis: string; }[];
  books: { id?: string | number | undefined; imgurl?: string | undefined; name: string; synopsis: string }[]
  musicResourecs: never[]
  bookResources: never[]
  swiperImages: import("d:/实训一/小说阅读/novel/src/types/index").Swiper[] | undefined
  Rebooks: never[]
  code: number
  data: T
  msg: string
}
