import { HttpMethod, ContentType } from 'common/enums/enums';

class Auth {
  constructor({ apiPath, http }) {
    this._apiPath = apiPath;
    this._http = http;
  }

  login(payload) {
    return this._http.load(`${this._apiPath}/auth/login`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      hasAuth: false,
      payload: JSON.stringify(payload)
    });
  }

  registration(payload) {
    return this._http.load(`${this._apiPath}/auth/register`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      hasAuth: false,
      payload: JSON.stringify(payload)
    });
  }

  getCurrentUser() {
    return this._http.load(`${this._apiPath}/auth/user`, {
      method: HttpMethod.GET
    });
  }
}

export { Auth };
