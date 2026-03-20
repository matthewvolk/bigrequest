import { oauth } from './oauth';
import { bigcommerceQuerySerializer, rest } from './rest';

const bigrequest = {
  bigcommerceQuerySerializer,
  oauth,
  rest,
};

export = bigrequest;
