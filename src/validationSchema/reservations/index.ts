import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  customer_name: yup.string().required(),
  reservation_date: yup.date().required(),
  reservation_time: yup.date().required(),
  number_of_people: yup.number().integer().required(),
  business_id: yup.string().nullable().required(),
});
