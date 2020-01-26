<template>
    <div class="blog-flex">
        <div class="flex-elem1">
            <p class="font-style join-blog">Rejoins-nous sur le blog Terradia !<br>On y publie régulièrement des informations sur nos applications<br>et même sur l'équipe!</p>
            <button class="btn">Direction le blog</button>
        </div>
        <div class="flex-elem2">
            <img src="../assets/images/blog.svg" class="blog-icon">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blog"
    }
</script>

<style scoped>

    .btn:hover {
        background-color: #5CC04A;
        color: #FFFFFF;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .btn {
        padding: 0.5em 3em;
        border: 1px solid #5CC04A;
        border-radius: 8px;
        color: #5CC04A;
        font-family: Montserrat;
        font-weight: normal;
        margin-top: 0.7em;
    }

    .flex-elem1 {
        /*border: 2px red solid;*/
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .flex-elem2 {
        /*border: 2px greenyellow solid;*/
        display:flex;
        justify-content: flex-end;
    }

    .blog-icon {
        width: 75%;
    }

    .join-blog {
        font-size: 24px;
        text-align: center;
        color: #5CC04A;
    }

    .font-style {
        font-family: Montserrat;
        font-weight: bolder;
    }

    .blog-flex {
        display: flex;
        margin-top: 2em;
        margin-right: 2em;
        margin-left: 2em;
        /*border: 2px blue solid;*/
        margin-bottom: 2em;
    }
</style>