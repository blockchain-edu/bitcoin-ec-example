import * as express from "express";
import * as bodyParser from "body-parser";

const app: express.Application = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.json("hello world!");
});

app.get("/invoice", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const response: any = {
      invoice: "bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=0.1",
  };
  res.json(response);
});

app.listen(3000, () => {
    console.log("server started. port=3000");
});
