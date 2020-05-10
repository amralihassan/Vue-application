<template>    
    <div class="our-blog">        
        <h1>{{pageName}}</h1>
        <p>{{pageDes}}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <BlogPosts v-for="post in posts" 
                        :key        ="post.id" 
                        :view       ="post.view" 
                        :title      ="post.title" 
                        :content    ="post.content" 
                        :category   ="post.category" 
                        :author     ="post.author" 
                        :date       ="post.date"/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <BlogSideBar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BlogPosts from '@/components/blog/BlogPosts';
import BlogSideBar from '@/components/blog/BlogSideBar';
import JsonPosts from '../json/blog_posts.json';

export default {    
   data:function(){
       return{
           pageName : "Blog",
           pageDes : "This is Blog page",
           posts : JsonPosts
       }
   },
   components:{
       BlogPosts,
       BlogSideBar
   }
}
</script>
