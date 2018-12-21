import rp from "request-promise-native";

export class RestClient {
  public static async send(httpMethod: string, url: string): Promise<any> {
    let responseBody: any;
    await rp({
      method: httpMethod,
      uri: url,
      json: true,
    }).then((body: any) => {
      responseBody = body;
    }).catch((error: any) => {
      alert(error);
      throw new Error("http error.");
    });
    return responseBody;
  }
}
