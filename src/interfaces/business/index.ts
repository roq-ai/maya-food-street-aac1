import { FeedbackInterface } from 'interfaces/feedback';
import { FoodItemInterface } from 'interfaces/food-item';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  opening_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  feedback?: FeedbackInterface[];
  food_item?: FoodItemInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
    food_item?: number;
    order?: number;
    reservation?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  opening_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
