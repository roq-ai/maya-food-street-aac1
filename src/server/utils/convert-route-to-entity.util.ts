const mapping: Record<string, string> = {
  businesses: 'business',
  feedbacks: 'feedback',
  'food-items': 'food_item',
  orders: 'order',
  reservations: 'reservation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
