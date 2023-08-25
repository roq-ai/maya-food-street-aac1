import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  customer_name: yup.string().required(),
  rating: yup.number().integer().required(),
  comments: yup.string().required(),
  business_id: yup.string().nullable().required(),
});
