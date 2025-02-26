<script>
  import User from '../../assets/icons/user.svg'
  import Cart from '../../assets/icons/shopping-cart.svg'
  import Heart from '../../assets/icons/heart.svg'
  import {product,openCart} from '../../database/store'

  function showCartItem(){
openCart.update(r=>r=true)
  }
  
</script>

<main>
  <button class='user' on:click={showCartItem}>
    <img src={Cart} alt="heart">
    {#if $product.length > 0}
    <abbr  title="cart" class="preview" >
      {$product.length}
    </abbr>
      
    {/if}
  </button>
  <abbr title="user" class='user' >
    <img src={User} alt="user">
  </abbr>
  <abbr title="favorite" class='user'>
    <img src={Heart} alt="cart">
  </abbr>
</main>

<style scoped>
  main{
    display: flex;
    align-items: center;
  }

  button{
    background: transparent;
  }

  .preview{
    position: absolute;
    right: 0;
    background: red;
    padding: 4px;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    font-weight: bolder;
    display: grid;
    place-items: center;
    border: 2px solid white;
    top: 0;
  }

  img{
    width: 100%;
    height: 100%;
  }
  
  .user{
    width: 3rem;
    position: relative;
    height: 3rem;
    cursor: pointer;
    border: 1px solid var(--primaryColor);
    margin: 0 10px;
    border-radius: 50%;
    padding: 10px;
  }
  @media(max-width: 855px){
    .user{
      width: 2rem;
      height: 2rem;
      padding: 6px;
      margin: 0 3px;
    }
    .preview{
      width: 1rem;
      height: 1rem;
      padding: 1px;
    }
  }
</style>