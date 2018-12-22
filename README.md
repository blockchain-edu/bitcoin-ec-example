# blockchain-ec

## 使い方

```
$npm i
$npm run serve
```

そしてlocahost:8080にブラウザなどでアクセスする.

## API
#### GET /invoice 
##### parameter
- amount
買ったものの値段
- orderId
購入を管理するId

##### return
- invoice bip21形式のinvoice

##### リクエスト例
http://localhost:3000/invoice?amount=0.1&order_id=0

##### レスポンス例
{
    "invoice": "bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=0.1"
}