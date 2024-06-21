type onboardingSwiperDataType = {
  id: number;
  title: string;
  description: string;
  sortDescrition: string;
  sortDescrition2?: string;
  image: any;
};

type Avatar = {
  public_id: string;
  url: string;
};

type User = {
  _id: string;
  name?: string;
  email?: string;
  avatar?: Avatar;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type BannerDataTypes = {
  bannerImageUrl: any;
};
