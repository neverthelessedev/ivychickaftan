<script>
  import Search from '../../assets/icons/search.svg'
</script>

<main>
  <input type="text" placeholder="Search for product">
<div class='select'>
    <select name="category" id="category">
      <option value="select" hidden>Select Category</option>
      <option value="high-fashion">High Fashion</option>
      <option value="kaftans">Kaftans</option>
      <option value="luxury bubu dresses">Luxury-BuBu-Dresses</option>
    </select>
</div>
<div class='search'>
    <img src={Search} alt="search">
</div>
</main>

<style scoped>
  main{
    border: 1px solid var(--primaryColor);
    border-radius: 2rem;
    display: flex;
    align-items: center;
    padding: 0 10px;

    .select{
      margin: 0 10px;
      padding: 10px 5px;
    }
    

    .search{
      width: 2rem;
      height: 2rem;
      background: #000;
      border-radius: 50%;
      padding: 5px;
    }
    
    input{
      border: 0;
      padding: 14px 0;
      padding-left: 1rem;
    }
    input:focus{
      outline: 0;
    }
    
    select{
      font-size: 1.5rem;
      background: 0;
      border: 0;
    }
    
    select:focus{outline: 0;}
    
  }

 
  @media(min-width: 1442px){
    .select{
            border-right: 1px solid var(--primaryColor);
      border-left: 1px solid var(--primaryColor);

    }
  }
  
  @media(max-width: 1442px){
    input{
      width: 10rem;
      padding: 20px 0;
    }
    .search{
      display: none;
    }
    select{
      font-size: 1rem;
    }
   
    main{
      padding: 0 4px;
    }
  }

   @media(max-width: 1126px){
    select{
      display: none;
    }
    .select{
      border-right: 0;
    }
   input{
    border: 1px solid black;
    padding: 6px 20px;
   }
  }
   @media(max-width: 554px){
input{
  width: 9rem;
    padding: 6px 2px;
   }
  }
   @media(max-width: 514px){
input{
  width: 7rem;
    padding: 6px 0;
   }
  }
   @media(max-width: 461px){
main{
  display: none;
   }
  }
  
</style>