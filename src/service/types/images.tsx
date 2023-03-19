export type ImageResponse = {
  children: Image[];
};
export type Image = {
  kind: string;
  data: ImageData;
};

export type ImageData = {
  url: string;
  title: string;
  author: string;
  is_video: boolean;
  created_utc: number;
};
