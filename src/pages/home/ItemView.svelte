<script>
  import Cart from '../../assets/icons/shopping-cart.svg'
  import Heart from '../../assets/icons/heart.svg'
  import View from '../../assets/icons/shopping-cart.svg'
  import {product,total,currency} from '../../database/store'
    import { getNotificationsContext } from 'svelte-notifications';

  export let cloth
    const { addNotification } = getNotificationsContext();

  


  function addToCart(cloth){
    product.update(p=>[...p,cloth])
    if ($currency == '€'){
      const sum = $product.reduce((acc,num)=>acc+num.priceInEuro,0)
      total.update(_=>sum)
    }else if ($currency == '₦'){
      const sum = $product.reduce((acc,num)=>acc+num.priceInNaira,0)
      total.update(_=>sum)
    }else{
      const sum = $product.reduce((acc,num)=>acc+num.priceInDollar,0)
      total.update(_=>sum)

    }

    addNotification({
    text: 'Product successfully added to cart!!',
    position: 'top-left',
    type: 'success',
      removeAfter: 7000,
  })
  }
  
</script>

<main>  
  <button class="imgs"
  on:click={()=>addToCart(cloth)}
  >
    <img src={Cart} alt="cart" >
  </button>
  <div class="img">
    <img src={Heart} alt="cart" >
  </div>
  <div class="img">
    <img src={View} alt="cart" >
  </div>
</main>
<style>
  main{
    position: absolute;
    background: white;
    border-radius: 2rem;
    border: 1px solid var(--secondaryColor);
    box-shadow: 0 0 4px var(--primaryColor);
    z-index: 10;
  }


  img{
    cursor: pointer;
    transition: all 0.4s;
  }
  img:hover{
    transform: scale(1.2);
  }

  .img{
    width: 3.5rem;
    height: 3.5rem;
    border-top: 1px solid black;
    margin: 13px 0;
    padding: 10px 14px;
  }
  .imgs{
    width: 3.7rem;
    height: 3rem;
    padding: 10px 14px;
    background: transparent;
    border: 0;
    margin: 13px 0;
  }
  
</style>