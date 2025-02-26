<script>
  import {currency,product,total} from '../../database/store'
  
  let value = '$'
  function changeCurrency(){
    currency.update(_=>value)
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
</script>

<main>
  <select name="currency" bind:value={value} id="currency" on:change={changeCurrency}>
    <option value="$">usd</option>
    <option value="₦">ngn</option>
    <option value="€">eud</option>
  </select>
</main>

<style scoped>
  select{
    font-size: 1.5rem;
    padding: 10px 20px;
    border-radius: 1rem;
    background: transparent;
    text-transform: uppercase;
  }
  
  @media(max-width: 860px){
    select{
      font-size: 1rem;
      padding: 10px 2px;
    }
  }
  
</style>