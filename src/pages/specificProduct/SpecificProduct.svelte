<script>
  import Img from '../../assets/images/cloth10.jpg'
  import {currency} from '../../database/store'
</script>

<main>
  
  <div class="img">
    <img src={Img} alt="cloth">
  </div>
  <div class="info">
    <h3>Rich and Famous Feather</h3>
    <p>Our brand is tailored to make women feel beautiful, confident and empowered. We specializes in high fashion luxury kaftan and Bubu dresses. Discover a curated collection of high-quality, trendy, and timeless clothing that suits every style and occasion.  Stay ahead of the trends with our latest arrivals and enjoy a seamless shopping experience with excellent customer service.</p>
    <h4>{$currency}34.00</h4>
    <h5>kaftan</h5>
    <div class="to-cart">
      <button>By Now</button>
      <button>Add to Cart</button>
      <button>Add to wishlist</button>
    </div>
  </div>
</main>
<style scoped>
  main{
    width: 100vw;
    height: 100vh;
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .info{
    width: 35rem;
  }
h5{
  font-size: 1.6rem;
}
  .to-cart{
    display: flex;
    width: 100%;
    margin: 20px 0;
    justify-content: space-between;
  }

  button{
    padding: 10px 1.5rem;
    color: white;
    font-weight: bold;
    background: var(--secondaryColor);
    font-size: 1.4rem;
    border: none;

    border-radius: 5px;
    cursor: pointer;
  }
  h4{
    font-size: 2rem;
    font-weight: bold;
  }

  h3{
    font-size: 3rem;
  }
  p{
    font-size: 1.5rem;
    margin: 10px 0;
  }

  .img{
    width: 25rem;
    height: 35rem;
    background: var(--secondaryColor);
    border-radius: 1rem;
    overflow: hidden;
  }
  
  img{
    width: 100%;
    height: 100%;
  }
</style>