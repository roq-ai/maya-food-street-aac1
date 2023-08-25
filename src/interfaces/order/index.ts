import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_name: string;
  order_status: string;
  total_price: number;
  business_id: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_name?: string;
  order_status?: string;
  business_id?: string;
}
