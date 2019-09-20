import { verify } from 'jsonwebtoken';
import { Context } from '../types';

/**
 * Get a user id from JWT if one is given in the Authorization header
 *
 */
function getUserId(context: Context): string | false {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, process.env.SECRET_JWT_KEY);
    return verifiedToken.userId;
  }
  return false;
}

export default getUserId;
