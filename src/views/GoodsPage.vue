<template>
<ul class=goodslist>
<li class=item><Goods name="goods" value=0.1 img="https://gyazo.com/2d358dca27f39a05b5f4f142297995d9.jpg"></Goods></li>
</ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PurchaseButton from "@/components/PurchaseButton.vue";
import Goods from "@/components/Goods.vue";

@Component({
  components: {
    Goods,
  },
})
export default class GoodsPage extends Vue {}
</script>

<style>
.goodslist {
    display: table;
    width: 100%;
    background: #FFF;
}
.item {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
</style>