<template>
    <div class="container-fluid content_con">
        <div class="row">
            <div class="con_top">
                <p>总览</p>
                <p>欢迎回来，不归途！你的最后一次登陆在昨天，下午16:54 <span>×</span></p>
                <p class="col d-xl-block">总览</p>
            </div>
            <div class="con_path">
                <p><i class="icon"></i>&gt;<span> 首页 </span>&gt;<span> 总览 </span></p>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cont"
    };
</script>

<style scoped lang="less">
    .content_con{
        background: #f5f5f5;
        position: relative;
        overflow: hidden;
        &::before{
            content: "";
            display: inline-block;
            border-width: 0 42px 42px 0;
            border-style: solid;
            border-color: rgba(0,0,0,.2) #fff;
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
        }
        .con_top{
            width: 100%;
            display: flex;
            justify-content: space-around;
            line-height: .6rem;
            font-size: .16rem;
            border-bottom: 1px solid #ddd;
            color: #9EA7B3;
            p{
                flex: 1;
                border-left: 1px dashed #CCC;
                padding: 0 .2rem;
                box-sizing: border-box;
                &:first-of-type{
                    padding-left: 1rem;
                    border: 0;
                }
                &:nth-of-type(2){
                    flex: 3;
                    font-size: .12rem;
                    span{
                        float: right;
                        cursor: pointer;
                        display: block;
                        width: .4rem;
                        text-align: center;
                        font-size: .16rem;
                    }
                }
                &:last-of-type{
                    display: none
                }
            }
        }
        .con_path{
            line-height: .5rem;
            font-size: .14rem;
            color: #9EA7B3;
            background: rgba(0,0,0,.02);
            width: 100%;
            padding-left: 20px;
            i{
                background-position: 0 -20px;
                position: relative;
                top: 6px;
            }
        }
    }
</style>