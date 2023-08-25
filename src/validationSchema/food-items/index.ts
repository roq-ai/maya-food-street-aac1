import * as yup from 'yup';

export const foodItemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().integer().required(),
  status: yup.string().required(),
  business_id: yup.string().nullable().required(),
});
