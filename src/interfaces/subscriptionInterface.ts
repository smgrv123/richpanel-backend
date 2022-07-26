interface SubscriptionInterface {
  name: string;
  email: string;
  planName: string;
  monthly: boolean;
  yearly: boolean;
  price: number;
  videoQuality: string;
  resolution: string;
  device: string;
  numberOfScreens: string;
  createdAt: Date;
}

export default SubscriptionInterface;
