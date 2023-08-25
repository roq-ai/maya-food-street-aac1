import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  customer_name: yup.string().required(),
  order_status: yup.string().required(),
  total_price: yup.number().integer().required(),
  business_id: yup.string().nullable().required(),
});
