export type Advertiser = {
  id: number;
  name: string;
  advertiserId: string;
  email: string;
  avatar: string;
  uploadedAds: number;
  status: string;
};

export type Notification = {
  id: number;
  type: string;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
};

export type User = {
  name: string;
  role: string;
  avatar: string;
};
