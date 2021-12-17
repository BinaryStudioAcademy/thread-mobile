import { HttpMethod } from 'common/enums/enums';

class Image {
  constructor({ http }) {
    this._http = http;
  }

  uploadImage(image) {
    const { uri, type, fileName: name } = image;

    const formData = new FormData();

    formData.append('image', { uri, type, name });

    return this._http.load('/api/images', {
      method: HttpMethod.POST,
      payload: formData
    });
  }
}

export { Image };
