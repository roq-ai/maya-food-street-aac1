import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  customer_name: string;
  reservation_date: any;
  reservation_time: any;
  number_of_people: number;
  business_id: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_name?: string;
  business_id?: string;
}
