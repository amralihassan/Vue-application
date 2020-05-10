<template>
    <div class="sidebar-wedget">
         {{ 'sidebar'| toUpperCase}}
    </div>
</template>
<script>
export default {
    name : "sidebar",
    filters: {
        toUpperCase : function(v){
            return v.toUpperCase();
        }
    }
}
</script>
