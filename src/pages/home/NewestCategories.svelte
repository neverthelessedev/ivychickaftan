<script>

  
  import ItemView from './ItemView.svelte';
  import {products} from '../../database/products'
  import ProductLoading from '../../loading/ProductLoading.svelte';
  import { currency, product } from '../../database/store';
  let limit = 6
  let loading = false
  
  function addMoreProduct(){
    loading = true
    setTimeout(() => {
      limit = limit+3
    loading = false
    }, 2000);
  }

  const manyLoading= Array(3).fill(null)
  
</script>

<main>
  
  <h3>Newest Category</h3>
  <div class='container'>
   
    {#each products.slice(0,limit) as product}
      
    <div class="cloth" 

    >
      <ItemView cloth={product} />
        
      <div class="img">
        <img src={product.src[0]} alt="cloth" loading="lazy">
      </div>
      <p class='title'>{product.title}</p>
      <h4><strong>{$currency}</strong>
        {#if $currency == 'N'}
        {product.priceInNaira}.00
        
        {:else if $currency == 'E'}
        {product.priceInEuro}.00

        {:else}
        {product.priceInDollar}.00
        {/if}
      </h4>
        
    </div>
    {/each}
    {#if loading}
       {#each manyLoading as _,index}  
       <ProductLoading  />  
       {/each}
    {/if}
 </div>
 {#if limit < products.length}
  
 <div class='center'>
    <button class='more' on:click={addMoreProduct}>More Products</button>
 </div>
 {/if}
</main>

<style scoped>

  main{
    padding: 3rem;
  }
  .center{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .more{
    padding: 1rem 4rem;
    border-radius:3rem;
    cursor: pointer;
    border: 1px solid white;
    text-align: center;
    background: var(--secondaryColor);
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin: 2rem;
    transition: 0.5s all;
    animation: show;
    animation-timeline: view();
  }

  @keyframes show{
    from{
transform: translateY(10rem);
}to{
      transform: translateY(0);

    }
  }
  
  .more:hover{
    background: var(--tertiaryColor);
  }

  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  h3{
    text-align: center;
    font-size: 3rem;
    animation: title ;
    animation-timeline: view();
  }

    @keyframes title{
    from{
      opacity: 0.6;
      color: var(--primaryColor);
    }to{
      color: var(--secondaryColor);
      opacity: 1;

    }
  }

  h4{
    font-size: 1.4rem;
    padding: 8px;
  }
  
  .title{
    font-size: 1.5rem;
    padding: 10px 0;
    border-bottom: 1px solid var(--primaryColor);
  }

  @media(max-width: 475px){
    .title{
      font-size: 1rem;
    }
.more{
  font-size: 1rem;
  padding: 10px 20px;
}
  }
  
  
  .cloth{
    margin: 2rem;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
    text-align: center;
    border: 1px solid var(--primaryColor);
    width: 24rem;
    box-shadow: 0 5px 8px gray;
    animation: enter;
    animation-timeline: view();
  }

  @keyframes enter{
    from{
      transform: translateY(3rem);
      transform: scale(0.8);
      opacity: 0.8;
    }to{
      transform: scale(1);
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  img{
    width: 100%;
    cursor: pointer;
    transition: 0.6s ease;
    object-fit: contain;
    background: var(--secondaryColor);
  }
  img:hover{
    transform: scale(1.1);
  }
  
  .img{
    height: 30rem;
    overflow: hidden;
    width: 100%;
  }
  @media(max-width: 531px){
    .img{
      height: 32rem;
      width: 100%;
    }
main{
  padding: 1rem;
}

.cloth{
  margin: 10px;
}
  }
  @media(max-width: 456px){
    .img{

      height: 28rem;
    }
  }
  @media(max-width: 387px){
    .img{

      height: 25rem;
    }
  }
  @media(max-width: 360px){
    .img{

      height: 22rem;
    }
  }
  @media(max-width: 333px){
    .img{

      height: 19rem;
    }
  @media(max-width: 291px){
    .img{

      height: 15rem;
    }
  }}

</style>