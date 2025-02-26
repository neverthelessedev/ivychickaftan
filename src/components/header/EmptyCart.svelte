<script>
  import Empty from '../../assets/img/empty.jpeg'
</script>

<main>
  <div class="img">
    <img src={Empty} alt="empty">
  </div>
  <p>Ouch!! no product in your cart start shopping</p>
  <a href="/shop">Let start shopping</a>
</main>

<style scoped>
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img{
    width: 100%;
  }

  a{
    background: var(--secondaryColor);
    font-size: 1.4rem;
    padding: 10px 30px;
    color: white;
    text-decoration: none;
    border-radius: 3rem;
    font-weight: bold;
    margin: 20px;

  }
  
  img{
    width: inherit;
  }

  p{
    font-size: 2rem;
    text-align: center;
  }
</style>