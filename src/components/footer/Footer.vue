<template>
    <div class="footer-container">
        <div class="footer-nav">
            <div class="footer-nav-items">
                <div>保單查詢</div><span></span>
                <div>法令公告</div><span></span>
                <div>資訊公開</div><span></span>
                <div>顧客資料保密措施</div><span></span>
                <div>電子商務自律規範</div><span></span>
                <div>主管機關相關連結</div>
                <div class="footer-nav-number">網路投保商品專線</div>
            </div>
            <div class="footer-nav-info">
                網路投保商品專線：02-21626204 服務時間：週一至週五 09:00-17:00 (國定假日除外) <br/>
                其他服務(24小時)：市話請撥免費服務專線 0800-036-599，手機請改撥付費電話 02-21626201
            </div>
        </div>
        <div class="footer-company">
            &copy;國泰人壽保險股份有限公司
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variable.scss';
    .footer-container{
        position: fixed;
        bottom: 0;
        width: 100%;
        .footer-nav{
            background-color: $gray-light;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .footer-nav-items{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: left;
                color: $green;
                font-weight: 600;
                @include rwd($leptop){
                    gap: 1rem;
                    justify-content: center;
                    padding: 1rem 0 ;
                    }
                div{
                    width: 50%;
                    border-bottom: 1px solid #ddd;
                    padding: .5rem .5rem ;
                    @include rwd($leptop){
                       width: auto;
                       border-bottom: 1px solid transparent;
                    }
                    cursor: pointer;
                    &:hover{
                        color: $orange;
                    }
                }
                span{
                    width: 1px;
                    background-color: #ddd;
                    display: none;
                    @include rwd($leptop){
                        display: block;
                    }
                }
                .footer-nav-number{
                    @include rwd($leptop){
                        display: none;
                    }
                    color: $orange;
                }
            }
            .footer-nav-info{
                display: none;
                text-align: center;
                color: $black;
                padding-bottom: 1rem;
                @include rwd($leptop){
                        display: block;
                    }
            }
        }
        .footer-company{
            text-align: center;
            color: $white;
            background-color: $green;
            padding: .5rem 0;
        }
    }
</style>