<script>
  import {product,currency,total} from '../../database/store'
  

  
  let removeProductDuplicate = $product.filter(
    (product, index, self) => self.indexOf(product) == index
  );

  function removeProduct(cloth) {
    const newProduct = $product.filter((r) => r.id != cloth);
    product.update(_=> newProduct)
    removeProductDuplicate = $product.filter(
    (product, index, self) => self.indexOf(product) == index
  );
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
  
}

function addToProduct(cloth){
  product.update(p=>[...p,cloth])
  removeProductDuplicate = $product.filter(
  (product, index, self) => self.indexOf(product) == index
  );
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
  }
 function removeFromCart(cloth) {
    const checkId = $product.filter((p) => p.id == cloth);
    if (checkId.length > 1) {
      const duplicate = $product.filter((p) => p.id != cloth);
      const firstProduct = $product.filter((p) => p.id == cloth);
      firstProduct.pop();
      product.update(_=>[...firstProduct,...duplicate]) 

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
      
    } else {
      removeProduct(cloth);
    }
    
  }
  

</script>

<main>
  <p class='title'>All cart items</p>

  {#each  removeProductDuplicate as pro}
<section>
    <div class='container'>
        <div class="img">
          <img src={pro.src[0]} alt="cloth">
        </div>
    <div class="info">
          <p>{pro.title}
      </p>
          <p>{pro.category}
      </p>
      <h3>{$currency} {pro.priceInDollar}.00</h3>
      <div class="addItem"> 
        <button class='increase' on:click={()=>removeFromCart(pro.id)}> -  </button>
        <span> 

          {$product.filter((p) => p.id == pro.id).length}
        </span>
        <button class='increase' on:click={()=>addToProduct(pro)}> + </button>
      </div> 
    </div>
  </div>
  <button class='remove' on:click={()=>removeProduct(pro.id)}>X</button>
</section>
  {/each}
<b>
    <p class="title">{$currency} {$total}.00</p>
</b>
  <div class="button-container">
    <button class='proceed'>Proceed with payment</button>
  </div>
  
</main>
<style scoped>

main{
  padding: 10px;
}

section{
  display: flex;
  justify-content: space-between;
}

.remove{
  width: 4rem;
  height: 2rem;
  background: red;
  color: white;
  cursor: pointer;
  border: 0;
  font-weight: bold;
}

.remove:hover{
  background: firebrick;
  transition: all 0.5s;

}

.button-container{
  display: grid;
  place-items: center;
}

.proceed{
  background: rgb(12, 231, 12);
  font-size: 1.4rem;
  border: 0;
  font-weight: bold;
  color: white;
  border-radius: 2rem;
  padding: 10px 1rem;
  text-align: center;
}

p {
  margin: 10px 0;
}

.increase{
  background: #000;
  padding: 10px;
  color: white;
  font-size: 1.2rem;
  font-weight: bolder;
}

button{
  cursor: pointer;
  transition: all ease 0.5s;
}

button:hover{
  background: var(--secondaryColor);
}


.addItem{
 overflow: hidden;
 border: 1px solid black;
  border-radius: 2rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 8rem;
}

h3{
  margin: 10px 0;
}

.info{ 
  margin-left: 20px;
  
}

.container{
  display: flex;
  align-items: center;
margin: 10px 0;
border-bottom: 1px solid var(--secondaryColor);
padding: 3px;
}

.title{
  font-size: 1.4rem;
  text-align: center;
}
  
  .img{
    width: 8rem;
    height: 12rem;
  }

  img{
    width: 100%;
    height: 100%;
  }
</style>