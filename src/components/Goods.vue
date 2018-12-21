<template>
  <div class="goodsview">
    <h5>{{ name }}</h5>
    <p class="picture">
      <img :src="img">
    </p>
    <h5>{{ value }} btc</h5>
    <Button :value="value"></Button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { RestClient } from "../utils/restClient";
import Button from "./Button.vue";

@Component({components: {Button}})
export default class Goods extends Vue {
  @Prop()
  public name!: string;
  @Prop()
  public value!: number;
  @Prop()
  public img!: string;
}
</script>

<style>
p.picture img {
  width: 20%;
  max-width: 200px; /* 最大幅 */
  min-width: 150px; /* 最小幅 */
}
.goodsview {
  box-sizing: border-box;
  float: center;
  width: 20%;
  text-align: center;
  line-height: 30px;
  font-size: 30px;
}
</style>