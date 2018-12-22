<template>
  <div>
    <button @click="onClick">Purchase</button>
    <div class="qr" v-if="clicked">
      <h3>orderId={{ orderId }}</h3>
      <img :src="qrSrc">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Provide } from "vue-property-decorator";
import { RestClient } from "../utils/restClient";

@Component
export default class Button extends Vue {
  @Prop()
  public msg?: string;

  @Prop()
  public amount!: number;

  private orderId: number = 0;
  private qrSrc: string =
    "http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=error";
  private clicked: boolean = false;

  public async onClick() {
    try {
      const response: any = await RestClient.send(
        "GET",
        `http://localhost:3000/invoice?amount=${this.amount}&orderId=${
          this.orderId
        }`,
      );
      this.qrSrc =
        "http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=" +
        response.invoice;
      this.clicked = true;
    } finally {
      this.orderId++;
    }
  }
}
</script>
