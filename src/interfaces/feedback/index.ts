import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  customer_name: string;
  rating: number;
  comments: string;
  business_id: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_name?: string;
  comments?: string;
  business_id?: string;
}
