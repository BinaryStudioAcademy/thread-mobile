import { ApiPath, AuthApiPath, ENV } from '../enums/enums';

const WHITE_ROUTES = [
  `${ENV.APP.API_PATH}${ApiPath.AUTH}${AuthApiPath.LOGIN}`,
  `${ENV.APP.API_PATH}${ApiPath.AUTH}${AuthApiPath.REGISTER}`
];

export { WHITE_ROUTES };
