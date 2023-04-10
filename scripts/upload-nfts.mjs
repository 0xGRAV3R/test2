import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

(async () => {
    const drop = await sdk.getContract(
      "0xaD515d1A341d5F4d1f93826C0Cb8433A766fEB9b",
      "nft-drop"
    );
  
    try {
      await drop.createBatch([
        "https://my-json-server.typicode.com/0xPASTE/test2/nfts/0",
        "https://my-json-server.typicode.com/0xPASTE/test2/nfts/1",
      ]);
      console.log("uploaded all nfts");
    } catch (error) {
      console.log(error);
    }
  })();