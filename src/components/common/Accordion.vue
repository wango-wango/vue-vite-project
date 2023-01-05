<script setup>
import { ref } from "vue";
const activeName = ref("0");
const props = defineProps({
  QAList: Array,
});
const changeHandler = (e) => {
  console.log(e);
};
</script>
<template>
  <div>
    <el-collapse v-model="activeName" accordion :change="changeHandler">
      <template v-for="(item, index) in QAList" :key="index">
        <el-collapse-item :name="index">
          <template #title>
            <div class="header-icon">Q</div>
            <div class="header-title">{{ item.title }}</div>
            <Transition name="fade">
              <span class="material-icons" v-if="activeName === index">
                remove
              </span>
              <span class="material-icons" v-else> add </span>
            </Transition>
          </template>
          <div class="collapse-content">
            {{ item.content }}
          </div>
        </el-collapse-item>
      </template>
      <el-collapse-item :name="QAList.length">
        <template #title>
          <div class="header-icon">Q</div>
          <div class="header-title">網路投保應該如何申請理賠？</div>
          <Transition name="fade">
            <span class="material-icons" v-if="activeName === QAList.length">
              remove
            </span>
            <span class="material-icons" v-else> add </span>
          </Transition>
        </template>
        <div class="collapse-content">
          <ul>
            您可透過下列管道申請：
            <li>
              理賠申請書線上填寫：至會員中心理賠專區
              https://www.cathaylife.com.tw/oc/OCWeb/html/OC/Login/Login.jsp，線上填寫理賠申請書。
            </li>
            <li>
              郵寄申請：至官方網站理賠服務
              https://www.cathaylife.com.tw/cathaylife/services/claim/claim-docs，下載相關表單。您可於填寫完申請書並備齊應備文件後，將資料郵寄至各地服務據點辦理。
            </li>
            <li>臨櫃申請：攜帶應備文件至各地服務據點辦理。</li>
          </ul>
          <div>
            得知事故發生後10日內通知國泰人壽，並檢附相關文件，我們將於收齊應檢附文件後15日內給付保險金（參閱官方網站理賠服務
            https://www.cathaylife.com.tw/cathaylife/services/claim）。
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";
:deep(.el-collapse) {
  .el-collapse-item__header {
    background-color: #ccc;
    font-size: 1.6rem;

    .header-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      flex-grow: 1;
    }
    .header-icon {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: $gray;
      color: $white;
      margin: 0 1rem;
      flex-shrink: 0;
    }
    &.is-active {
      .header-icon {
        background-color: $white;
        color: $blue;
      }
    }
  }
}
.collapse-content {
  padding: 1rem;
}
</style>
