<script setup>
import AccordionVue from "/src/components/common/Accordion.vue";
import { onMounted } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "title",
  },
});
onMounted(() => {
  console.log(props?.title);
});
const QAData = [
  {
    title: "誰可以網路投保？",
    content:
      "法令規定網路投保之要保人年齡資格限定為18歲以上，惟商品投保年齡視各商品規定，且須完成國泰人壽會員註冊始能投保。",
  },
  {
    title: "受益人可以指定給誰？",
    content: "網路投保身故保險金受益人限被保險人之法定繼承人、直系血親或配偶。",
  },
  {
    title: "要保人、被保險人一定要同一人嗎？",
    content: "是，此商品要、被保險人須為同一人。",
  },
  {
    title: "若投保後，發現保單不適合該怎麼辦？",
    content: `由於保險契約大多屬於長期繼續性的契約，投保時應審慎衡量自身需求及繳費能力。要保人可隨時至國泰人壽各服務據點 https://www.cathaylife.com.tw/cathaylife/location，或登入會員專區 https://www.cathaylife.com.tw/oc/OCWeb/html/OC/Login/Login.jsp，提出終止本契約之申請，若要保人保險費已付足達一年以上或繳費累積達有保單價值準備金，國泰人壽應償付解約金。`,
  },
];
</script>
<template>
  <div class="QA-container">
    <div class="QA-title">{{ title }}</div>
    <div class="QA-content">
      <AccordionVue :QAList="QAData" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";
.QA-container {
  padding: 2rem;
  .QA-title {
   @extend %title;
  }
}
</style>
