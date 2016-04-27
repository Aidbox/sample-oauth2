# Sample Oauth2

__Step by step OAuth 2.0 Authorization code usage tutorial__

[Authorization Code Flow](http://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.1) (for apps with servers that can store persistent information).

1) Create __"Authorization Code"__ client on "Clients" section

![Create "Authorization Code" client](https://raw.github.com/aidbox/sample-oauth2/master/img/crete_client.png)


2) Create __Policy__ for access box data

Policy example

TODO: add some description about JSON schema and request object

```json
{
  "required" : [ "client" ],
  "properties" : {
    "client" : {
      "type" : "object"
    }
  }
}
```


![Create policy for clients](https://raw.github.com/aidbox/sample-oauth2/master/img/policy.png)


```bash
npm install
npm run start
```
