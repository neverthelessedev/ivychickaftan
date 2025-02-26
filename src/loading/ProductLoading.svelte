<main>
  <div class="cart"></div>
  <div class="img">

  </div>
  <div class="title"></div>
  <div class="price"></div>
</main>

<style scoped>

  .cart{
    position: absolute;
    height: 12rem;
    width: 4rem;
    border-radius: 3rem;
    background: rgb(207, 207, 207);
    animation: dim infinite 2s alternate;
    
  }
  
  main{
    position: relative;
    width: 24rem;
    margin-top: 2rem;
    background: gray;
    border-radius: 3rem;
    animation: dim infinite 1s alternate;
  }
  .img{
    width: 100%;
    height: 30rem;
    background: rgb(80, 80, 80);
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
  }

  @keyframes dim{
from{
      opacity: 0.8;
    }
    to{
      opacity: 1;
    }
  }

  .title{
    margin: 3rem 0;
    border-bottom: 1px solid var(--primaryColor);
  }
  .price{
    margin: 2rem 0;
    width: 100%;
    height: 10px;
  }

</style>