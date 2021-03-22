import { _ } from '../../util/const';

export default class FetchTest {
  async getData() {
    const response = await fetch(_.riotDataUrl);
    console.log(response);
    return response;
  }
}
