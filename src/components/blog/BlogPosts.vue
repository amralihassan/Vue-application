<template>
    <div class="post-box">
        <span class="post-views">{{view}}</span>
        <h3 class="post-title"> 
            {{title}}
        </h3>
        <span class="post-date">{{date}}</span>
        <p class="post-content">
            {{content  | shorten(50,'....')}}
        </p>
        <div class="row">
            <div class="col-sm-6">
                <!-- uppercase is vue filter created by me -->
                <span class="post-author">{{author | uppercase}}</span>  
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{category}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "post",
    props:['view','title','content','category','author','date']

}
</script>
<style lang="scss" scoped>
.post-box{
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-views{
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #4cAF50;
        border-radius: 4px;
        padding: 1px 5px;
        color: #ffffff;
        text-align: center;
        font-weight: bold;
    }
    .post-date{
        display: block;
        padding: 0 0 5px;
        color: #888;
        font-size: 14px;
    }
    .post-content{
        line-height: 1.8;
        color: #666;
    }
    .post-author{
        background-color: #607D88;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
    .post-category{
        background-color: #E91E63;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
}
</style>