<template>
    <div class="container-fluid publicTop">
        <div class="row">
            <ul class="publicTop_left">
                <li>
                    <i class="icon">
                        <span>99+</span>
                    </i>
                </li>
                <li>
                    <i class="icon">
                        <span>5</span>
                    </i>
                </li>
                <li>
                    <i class="icon"></i>
                </li>
            </ul>
            <div class="publicTop_center col-lg-7 d-xl-block row">
                <p class="calendar">
                    <i class="icon"></i>
                    <span>2019&nbsp;/</span>
                    <span>10&nbsp;/ </span>
                    <span>24&nbsp;/ </span>
                    <span>星期一</span>
                </p>
                <p class="time">
                    <i class="icon"></i>
                    <span>12：</span>
                    <span>00：</span>
                    <span>00</span>
                </p>
                <p class="weather">
                    <i class="icon"></i>
                    <span>历下</span>
                    <span>15℃</span>
                    <span>15ml/h</span>
                </p>
            </div>
            <div class="null"></div>
            <div class="user">
                <div>
                    <img src="" alt="">
                    <span class="userName">不归途</span>
                </div>
                <span>设置</span>
                <i class="icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "top"
  };
</script>

<style scoped lang="less">
    .publicTop{
        i{
            position: relative;
            top: 10px;
        }
        height: 70px;
        background: rgba(0,0,0,.2);
        padding-top: 10px;
        color: #fff;
        .publicTop_left{
            font-size: .12rem;
            margin-left: 20px;
            width: 150px;
            height: 54px;
            display: flex;
            justify-content: space-around;
            li{
                flex: 1;
                line-height: 54px;
                box-sizing: border-box;
                padding-top: 4px;
                span{
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    right: -10px;
                    top: -10px;
                    text-align: center;
                    line-height: 22px;
                }
                &:first-of-type i{
                    background-position: -80px 0;
                    position: relative;
                    cursor: pointer;
                    span{
                        background: #ff6417;
                    }
                }
                &:nth-of-type(2) i{
                    position: relative;
                    background-position: -60px 0;
                    cursor: pointer;
                    span{
                        background: #4ac4bc;
                    }
                }
                &:last-of-type i{
                    background-position: -40px 0;
                    cursor: pointer;
                }
            }
        }
        .publicTop_center{
            height: 44px;
            margin-top: 2px;
            line-height: 44px;
            border-radius: 22px;
            display: none;
            background: rgba(0,0,0,.2);
            box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
            font-size: 14px;
            line-height: 14px;
            i{
                position: relative;
                margin-right: 4px;
                top: 13px;
            }
            &::after{
                content: "";
                flex: 9999999;
            }
            .calendar{
                float: left;
                padding-left: 15px;
                span{
                    margin: 15px 0;
                    display: inline-block;
                    padding-left: 3px;
                    &:last-of-type{
                        padding-right: 15px;
                        border-right: 1px solid rgba(0,0,0,.4);
                        box-shadow: 1px 0 0 rgba(255, 255, 255, 0.1);
                    }
                }
                i{
                    background-position: -100px 0;
                }
            }
            .time{
                float: left;
                padding: 0 15px;
                i{
                    background-position: -120px 0;
                }
                span{
                    margin: 15px 0;
                    display: inline-block;
                    &:last-of-type{
                        padding-right: 15px;
                        border-right: 1px solid rgba(0,0,0,.4);
                        box-shadow: 1px 0 0 rgba(255, 255, 255, 0.1);
                    }
                }
            }
            .weather{
                float: left;
                padding: 0;
                i{
                    background-position: -120px 0;
                }
                span{
                    margin: 15px 0;
                    display: inline-block;
                    padding: 0 4px;
                }
            }
        }
        .null{
            flex: 99999;
        }
        .user{
            float: right;
            line-height: .5rem;
            font-size: .12rem;
            div{
                display: inline-block;
                span::after{
                    content: "";
                    display: inline-block;
                    border: 4px solid transparent;
                    border-top-color: #fff;
                    margin: 0 6px;
                    position: relative;
                    top: 2px;
                }
            }
            img{
                width: 45px;
                height: 45px;
                box-sizing: border-box;
                border-radius: 50%;
                border: 2px solid rgba(255,255,255,.8);
                background: #000000;
                display: inline-block;
                margin-right: 10px;
            }
            span{
                padding: 0 6px;
            }
            i{
                position: relative;
                top: 15px;
                margin: 0 20px 0 10px;
                background-position: -140px 0;
            }
        }
    }
</style>