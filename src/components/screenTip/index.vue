<template>
    <div class="mob-con">
        <div class="mob-cen">
            <i></i>
            <div>请使用横屏浏览</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'screenTip'
    }
</script>

<style scoped>
    /*竖屏*/
    @media all and (orientation: portrait) {
        .mob-con{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: #32373b;
            z-index: 9990;
        }
        .mob-cen{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            z-index: 9999;
        }
        .mob-cen i{
            margin: auto;
            display: block;
            width: 140px;
            height: 200px;
            background: url('./images/phone.svg') no-repeat center;
            background-size: 100% auto;
            animation: mobileR 1.5s ease infinite alternate;
            -webkit-animation: mobileR 1.5s ease infinite alternate;
        }
        .mob-cen div{
            font-size: 16px;
            margin-top: 20px;
            color: #ffd40a;
            text-align: center;
        }

        @keyframes mobileR{
            0% {
                -webkit-transform: rotate(-90deg);
            }
            30% {
                -webkit-transform: rotate(-90deg);
            }
            70% {
                -webkit-transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(0deg);
            }
        }
        @-webkit-keyframes mobileR{
            0% {
                -webkit-transform: rotate(-90deg);
            }
            30% {
                -webkit-transform: rotate(-90deg);
            }
            70% {
                -webkit-transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(0deg);
            }
        }
    }
    /*横屏*/
    @media all and (orientation: landscape) {
        .mob-con {
            display: none !important;
        }
    }
</style>
