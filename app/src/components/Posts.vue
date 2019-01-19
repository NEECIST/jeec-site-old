<template>
  <div class="posts-comp">
    <component-title title="News" subtitle="Lates news from our social media"/>

    <div class="posts-flex">
        <div class="post" v-for="post in posts" :key="post.embedded_code" v-html="post.embedded_code">
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "posts",
  data() {
      return {
          posts: [
              {
                embedded_code: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJEECIST%2Fposts%2F10156078368610765&width=500" width="500" height="671" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
              },
              {
                embedded_code: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJEECIST%2Fposts%2F10156078368610765&width=500" width="500" height="671" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
              },
              {
                embedded_code: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJEECIST%2Fposts%2F10156078368610765&width=500" width="500" height="671" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
              },
              {
                embedded_code: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJEECIST%2Fposts%2F10156078368610765&width=500" width="500" height="671" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
              },
              {
                embedded_code: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJEECIST%2Fposts%2F10156078368610765&width=500" width="500" height="671" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
              }
          ]
      }
  }
};
</script>

<style>
.posts-comp {
  width: 100%;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 40px;
  text-align: center;
}

.posts-flex {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
  text-align: center;
  margin-top: 20px;
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1600px) {
  .posts-flex {
    justify-content: space-between;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1100px) {
  .posts-flex {
    padding-left: 7vw;
    padding-right: 7vw;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 850px) {
  .posts-flex {
    justify-content: space-between;
    display: inline-block;
  }
}
</style>
