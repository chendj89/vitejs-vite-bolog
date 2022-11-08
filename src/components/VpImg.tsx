interface Img {
  /**
   * 来源
   */
  origin: string;
  /**
   * 图片链接
   */
  url: string;
}
const imgs: Img[] = [
  {
    origin: 'https://www.zhihu.com/question/41102803/answer/2746722760',
    url: 'https://picx1.zhimg.com/80/v2-5f51c2ac6bbf911b63fa9e8241ac26b4_720w.webp?source=1940ef5c',
  },
];
const VpImg = () => {
  return (
    <div>
      <div>2222</div>
      {imgs.map((ele) => (
        <img style="width:48px" src={ele.url} />
      ))}
    </div>
  );
};
export default VpImg;
